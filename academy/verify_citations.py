from __future__ import annotations

import argparse
import json
import re
import sys
import time
import urllib.error
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime
from pathlib import Path

SCRIPT_DIR = Path(__file__).resolve().parent
CONFIG_PATH = SCRIPT_DIR / 'config.json'
LOCAL_CONFIG_PATH = SCRIPT_DIR / 'config.local.json'

DEFAULT_CONFIG = {
    'source_root': '/Users/zijian/Library/Mobile Documents/com~apple~CloudDocs/SCI/2026sci1/学术小龙虾',
    'project_root': '.',
}

ARXIV_ID_RE = re.compile(
    r'(?i)(?:arxiv(?:\s*id)?\s*[:：]?\s*)?`?((?:19|20|21|22|23|24|25|26)\d{2}\.\d{4,5}(?:v\d+)?)`?'
)
DOI_RE = re.compile(r'\b(10\.\d{4,9}/[-._;()/:A-Z0-9]+)\b', re.I)

ARXIV_API = 'https://export.arxiv.org/api/query?id_list={}&max_results={}'
CROSSREF_API = 'https://api.crossref.org/works/{}'
USER_AGENT = 'jujutsu-sci/1.0 (https://github.com/zijianxcode/jujutsu-sci)'

ARXIV_BATCH_SIZE = 50
ARXIV_SLEEP = 3.0
CROSSREF_SLEEP = 0.6


def load_config() -> dict:
    if CONFIG_PATH.exists():
        with open(CONFIG_PATH, encoding='utf-8') as f:
            config = json.load(f)
        if LOCAL_CONFIG_PATH.exists():
            with open(LOCAL_CONFIG_PATH, encoding='utf-8') as f:
                config.update(json.load(f))
        return config
    return DEFAULT_CONFIG


def extract_arxiv_ids(content: str) -> list[str]:
    """Return all unique arXiv IDs found in content."""
    ids = []
    for m in ARXIV_ID_RE.finditer(content):
        raw = m.group(1)
        base = re.sub(r'v\d+$', '', raw)
        if base not in ids:
            ids.append(base)
    return ids


def extract_dois(content: str) -> list[str]:
    """Return all unique DOIs found in content."""
    seen = set()
    result = []
    for m in DOI_RE.finditer(content):
        doi = m.group(1).rstrip('.,，。；;')
        if doi not in seen:
            seen.add(doi)
            result.append(doi)
    return result


def verify_arxiv_ids(ids: list[str]) -> list[dict]:
    """Batch-verify arXiv IDs. Returns [{id, status, title, error_msg}]."""
    results: list[dict] = []
    for i in range(0, len(ids), ARXIV_BATCH_SIZE):
        batch = ids[i:i + ARXIV_BATCH_SIZE]
        id_param = ','.join(batch)
        url = ARXIV_API.format(urllib.request.quote(id_param), len(batch))
        try:
            req = urllib.request.Request(url, headers={'User-Agent': USER_AGENT})
            with urllib.request.urlopen(req, timeout=30) as resp:
                raw = resp.read().decode('utf-8')
            found_map: dict[str, str] = {}
            root = ET.fromstring(raw)
            ns = {'atom': 'http://www.w3.org/2005/Atom'}
            for entry in root.findall('atom:entry', ns):
                eid_elem = entry.find('atom:id', ns)
                title_elem = entry.find('atom:title', ns)
                if eid_elem is not None and title_elem is not None:
                    eid_text = eid_elem.text or ''
                    full_id = eid_text.strip().split('/abs/')[-1]
                    m = re.search(r'((?:19|20|21|22|23|24|25|26)\d{2}\.\d{4,5})', full_id)
                    if m:
                        found_map[m.group(1)] = (title_elem.text or '').strip()
            for aid in batch:
                if aid in found_map:
                    results.append({'id': aid, 'status': 'verified', 'title': found_map[aid], 'error_msg': ''})
                else:
                    results.append({'id': aid, 'status': 'not_found', 'title': '', 'error_msg': ''})
        except Exception as e:
            for aid in batch:
                results.append({'id': aid, 'status': 'error', 'title': '', 'error_msg': str(e)})
        if i + ARXIV_BATCH_SIZE < len(ids):
            time.sleep(ARXIV_SLEEP)
    return results


def verify_dois(dois: list[str]) -> list[dict]:
    """Verify DOIs via CrossRef API. Returns [{doi, status, title, error_msg}]."""
    results: list[dict] = []
    for doi in dois:
        url = CROSSREF_API.format(urllib.request.quote(doi))
        try:
            req = urllib.request.Request(url, headers={'User-Agent': USER_AGENT})
            with urllib.request.urlopen(req, timeout=15) as resp:
                data = json.loads(resp.read().decode('utf-8'))
            msg = data.get('message', {})
            title = ''
            titles = msg.get('title', [])
            if titles:
                title = titles[0]
            results.append({'doi': doi, 'status': 'verified', 'title': title, 'error_msg': ''})
        except urllib.error.HTTPError as e:
            if e.code == 404:
                results.append({'doi': doi, 'status': 'not_found', 'title': '', 'error_msg': '404 Not Found'})
            else:
                results.append({'doi': doi, 'status': 'error', 'title': '', 'error_msg': f'HTTP {e.code}'})
        except Exception as e:
            results.append({'doi': doi, 'status': 'error', 'title': '', 'error_msg': str(e)})
        time.sleep(CROSSREF_SLEEP)
    return results


def find_paper_files(source_root: Path) -> list[Path]:
    """Walk source_root and return all 论文总结.md paths."""
    result = []
    if not source_root.exists():
        return result
    for path in source_root.rglob('论文总结.md'):
        if path.is_file():
            result.append(path)
    return sorted(result)


def scan_source(source_root: Path) -> list[dict]:
    """Scan all paper files and extract citations. Returns [{file, arxiv_ids[], dois[]}]."""
    entries = []
    for fp in find_paper_files(source_root):
        try:
            content = fp.read_text(encoding='utf-8')
        except (UnicodeDecodeError, OSError) as e:
            print(f'警告: 无法读取 {fp} → {e}', file=sys.stderr)
            continue
        arxiv_ids = extract_arxiv_ids(content)
        dois = extract_dois(content)
        if arxiv_ids or dois:
            entries.append({
                'file': str(fp),
                'relative': str(fp.relative_to(source_root)) if source_root in fp.parents else str(fp),
                'arxiv_ids': arxiv_ids,
                'dois': dois,
            })
    return entries


def status_mark(status: str) -> str:
    if status == 'verified':
        return '✅'
    if status == 'not_found':
        return '❌'
    return '⚠️'


def format_report(scan_results: list[dict], arxiv_results: dict[str, dict], doi_results: dict[str, dict]) -> str:
    """Generate human-readable report."""
    lines = [f'引用校验报告 — {datetime.now().strftime("%Y-%m-%d %H:%M:%S")}', '=' * 60, '']
    total = 0
    verified = 0
    not_found = 0
    errors = 0

    for entry in scan_results:
        lines.append(f'📄 {entry["relative"]}')
        for aid in entry['arxiv_ids']:
            r = arxiv_results.get(aid, {})
            status = r.get('status', 'unknown')
            title = r.get('title', '')
            lines.append(f'   arXiv:{aid}  {status_mark(status)} {status}')
            if title:
                lines.append(f'      {title}')
            total += 1
            if status == 'verified':
                verified += 1
            elif status == 'not_found':
                not_found += 1
            else:
                errors += 1
        for doi in entry['dois']:
            r = doi_results.get(doi, {})
            status = r.get('status', 'unknown')
            title = r.get('title', '')
            lines.append(f'   DOI:{doi}  {status_mark(status)} {status}')
            if title:
                lines.append(f'      {title}')
            total += 1
            if status == 'verified':
                verified += 1
            elif status == 'not_found':
                not_found += 1
            else:
                errors += 1
        lines.append('')

    lines.append('—' * 60)
    lines.append(f'总计: {total}  已验证: {verified}  未找到: {not_found}  错误: {errors}')
    return '\n'.join(lines)


def add_status_comments(scan_results: list[dict], arxiv_results: dict[str, dict], doi_results: dict[str, dict], dry_run: bool) -> None:
    """Append verification status block to each markdown file."""
    timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    for entry in scan_results:
        lines = ['', '---', f'<!-- citation-verification: {timestamp} -->']
        for aid in entry['arxiv_ids']:
            r = arxiv_results.get(aid, {})
            status = r.get('status', 'unknown')
            title = r.get('title', '')
            if status == 'verified':
                lines.append(f'<!-- arXiv:{aid} → found: "{title}" -->')
            elif status == 'not_found':
                lines.append(f'<!-- arXiv:{aid} → NOT FOUND -->')
            else:
                lines.append(f'<!-- arXiv:{aid} → ERROR: {r.get("error_msg", "")} -->')
        for doi in entry['dois']:
            r = doi_results.get(doi, {})
            status = r.get('status', 'unknown')
            title = r.get('title', '')
            if status == 'verified':
                lines.append(f'<!-- DOI:{doi} → found: "{title}" -->')
            elif status == 'not_found':
                lines.append(f'<!-- DOI:{doi} → NOT FOUND -->')
            else:
                lines.append(f'<!-- DOI:{doi} → ERROR: {r.get("error_msg", "")} -->')
        lines.append('')

        comment_block = '\n'.join(lines)
        if dry_run:
            print(f'[dry-run] 将写入: {entry["relative"]}')
            print(comment_block)
        else:
            fp = Path(entry['file'])
            try:
                content = fp.read_text(encoding='utf-8')
                if '<!-- citation-verification:' not in content:
                    fp.write_text(content.rstrip('\n') + comment_block, encoding='utf-8')
                    print(f'已更新: {entry["relative"]}')
                else:
                    print(f'跳过(已有校验记录): {entry["relative"]}')
            except OSError as e:
                print(f'写入失败: {fp} → {e}', file=sys.stderr)


def main() -> None:
    parser = argparse.ArgumentParser(description='验证论文总结中的 arXiv ID 和 DOI 引用')
    parser.add_argument('--source', type=str, default=None, help='源内容目录路径(覆盖 config.json)')
    parser.add_argument('--fix', action='store_true', help='在 markdown 文件中追加校验注释')
    parser.add_argument('--dry-run', action='store_true', help='仅预览，不写文件')
    args = parser.parse_args()

    config = load_config()
    source_root = Path(args.source).expanduser() if args.source else Path(config.get('source_root', DEFAULT_CONFIG['source_root']))
    if not source_root.exists():
        print(f'错误: 源目录不存在 → {source_root}', file=sys.stderr)
        sys.exit(1)

    print(f'扫描源目录: {source_root}')
    scan_results = scan_source(source_root)
    if not scan_results:
        print('未找到任何论文总结文件，或文件中未包含 arXiv ID/DOI。')
        return

    all_arxiv_ids: set[str] = set()
    all_dois: set[str] = set()
    for entry in scan_results:
        all_arxiv_ids.update(entry['arxiv_ids'])
        all_dois.update(entry['dois'])

    print(f'找到 {len(scan_results)} 个论文文件，{len(all_arxiv_ids)} 个 arXiv ID，{len(all_dois)} 个 DOI')

    arxiv_results: dict[str, dict] = {}
    if all_arxiv_ids:
        print('正在验证 arXiv ID...')
        arxiv_list = verify_arxiv_ids(sorted(all_arxiv_ids))
        arxiv_results = {r['id']: r for r in arxiv_list}
        verified = sum(1 for r in arxiv_list if r['status'] == 'verified')
        print(f'  arXiv: {verified}/{len(arxiv_list)} 验证通过')

    doi_results: dict[str, dict] = {}
    if all_dois:
        print(f'正在验证 {len(all_dois)} 个 DOI...')
        doi_list = verify_dois(sorted(all_dois))
        doi_results = {r['doi']: r for r in doi_list}
        verified = sum(1 for r in doi_list if r['status'] == 'verified')
        print(f'  DOI: {verified}/{len(doi_list)} 验证通过')

    report = format_report(scan_results, arxiv_results, doi_results)
    print()
    print(report)

    if args.fix:
        add_status_comments(scan_results, arxiv_results, doi_results, dry_run=args.dry_run)

    # Exit codes:  若还有  not-found 或 error ->  exit 1
    has_issues = False
    for r in arxiv_results.values():
        if r['status'] != 'verified':
            has_issues = True
            break
    if not has_issues:
        for r in doi_results.values():
            if r['status'] != 'verified':
                has_issues = True
                break
    if has_issues:
        sys.exit(1)


if __name__ == '__main__':
    main()
