from __future__ import annotations

"""Standalone paper quality checker — thin wrapper around sync_from_source.

Usage:
    python3 check_paper_quality.py                # text report on all papers
    python3 check_paper_quality.py --source /path  # custom source directory
    python3 check_paper_quality.py --json          # JSON output only
    python3 check_paper_quality.py --verbose       # show clean papers too
"""

import argparse
import json
import sys
from pathlib import Path

SCRIPT_DIR = Path(__file__).resolve().parent
sys.path.insert(0, str(SCRIPT_DIR))
import sync_from_source as sfs


def main() -> None:
    parser = argparse.ArgumentParser(description='检查论文总结完整性')
    parser.add_argument('--source', type=str, default=None, help='源内容目录路径')
    parser.add_argument('--json', action='store_true', help='以 JSON 格式输出结果')
    parser.add_argument('--verbose', action='store_true', help='同时显示无问题的论文')
    args = parser.parse_args()

    source_root, project_root, config = sfs.resolve_paths()
    if args.source:
        source_root = Path(args.source).expanduser()

    sfs.SOURCE_ROOT = source_root
    records = sfs.load_records()
    reports = sfs.check_all_papers(records, source_root)

    if args.json:
        output = []
        for r in reports:
            if not args.verbose and not r['errors'] and not r['warnings']:
                continue
            output.append(r)
        print(json.dumps(output, ensure_ascii=False, indent=2))
        return

    if args.verbose:
        total = len(reports)
        clean = sum(1 for r in reports if not r['errors'] and not r['warnings'])
        print(f'共 {total} 篇论文，{clean} 篇通过检查')
        print()
        for r in reports:
            label = r['title'] or r['file']
            status = '✅' if not r['errors'] and not r['warnings'] else '⚠️'
            print(f'{status} {label}')
            if r['errors']:
                for e in r['errors']:
                    print(f'   ❌ {e}')
            if r['warnings']:
                for w in r['warnings']:
                    print(f'   ⚠️  {w}')
            if r['sections_missing']:
                print(f'   📋 缺失: {", ".join(r["sections_missing"])}')
    else:
        sfs.print_quality_report(reports)

    has_errors = any(r['errors'] for r in reports)
    if has_errors:
        sys.exit(1)


if __name__ == '__main__':
    main()
