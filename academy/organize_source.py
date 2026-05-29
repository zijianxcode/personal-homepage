from __future__ import annotations

import argparse
import json
import re
import shutil
from dataclasses import dataclass
from pathlib import Path

SCRIPT_DIR = Path(__file__).resolve().parent
CONFIG_PATH = SCRIPT_DIR / 'config.json'


@dataclass(frozen=True)
class MovePlan:
    source: Path
    target: Path
    reason: str


def load_source_root() -> Path:
    config = json.loads(CONFIG_PATH.read_text(encoding='utf-8'))
    return Path(config['source_root'])


def parse_time_dir(name: str) -> tuple[str, str, str, str] | None:
    match = re.match(r'^(20\d{2})-(\d{2})-(\d{2})(?:-(\d{2}|.+))?$', name)
    if not match:
        return None
    year, month, day = match.group(1), match.group(2), match.group(3)
    suffix = match.group(4)
    if not suffix:
        slot = 'daily'
    elif re.fullmatch(r'\d{2}', suffix):
        slot = suffix
    else:
        slot = re.sub(r'[^\w\u4e00-\u9fff-]+', '-', suffix).strip('-') or 'note'
    return year, month, day, slot


def build_plan(root: Path) -> list[MovePlan]:
    plans: list[MovePlan] = []
    reserved = {'records', 'attachments', 'inbox', 'legacy-html'}

    for item in sorted(root.iterdir(), key=lambda path: path.name):
        if item.name in reserved or item.name.startswith('.'):
            continue

        if item.is_dir():
            if item.name == 'html':
                plans.append(MovePlan(item, root / 'legacy-html', '旧版 HTML 产物归档'))
                continue

            parsed = parse_time_dir(item.name)
            if parsed:
                year, month, day, slot = parsed
                plans.append(MovePlan(item, root / 'records' / year / month / day / slot, '时间记录目录归档'))
            continue

        if item.is_file():
            suffix = item.suffix.lower()
            if suffix == '.md':
                plans.append(MovePlan(item, root / 'inbox' / item.name, '顶层 Markdown 待整理'))
            elif suffix in {'.pdf', '.docx', '.doc', '.pptx', '.xlsx'}:
                plans.append(MovePlan(item, root / 'attachments' / item.name, '顶层附件归档'))

    return plans


def detect_conflicts(plans: list[MovePlan]) -> list[str]:
    conflicts: list[str] = []
    seen_targets: set[Path] = set()
    for plan in plans:
        if plan.target in seen_targets:
            conflicts.append(f'重复目标: {plan.target}')
        seen_targets.add(plan.target)
        if plan.target.exists():
            conflicts.append(f'目标已存在: {plan.target}')
    return conflicts


def apply_plan(plans: list[MovePlan]) -> None:
    for plan in plans:
        plan.target.parent.mkdir(parents=True, exist_ok=True)
        shutil.move(str(plan.source), str(plan.target))


def main() -> None:
    parser = argparse.ArgumentParser(description='整理学术小龙虾源目录，保持同步脚本兼容')
    parser.add_argument('--apply', action='store_true', help='真正执行移动；默认只预览')
    args = parser.parse_args()

    root = load_source_root()
    plans = build_plan(root)
    conflicts = detect_conflicts(plans)

    print(f'Source: {root}')
    print(f'Planned moves: {len(plans)}')
    for reason in sorted({plan.reason for plan in plans}):
        count = sum(1 for plan in plans if plan.reason == reason)
        print(f'- {reason}: {count}')

    if conflicts:
        print('\nConflicts:')
        for conflict in conflicts:
            print(f'- {conflict}')
        raise SystemExit(1)

    print('\nPreview:')
    for plan in plans[:40]:
        print(f'- {plan.source.name} -> {plan.target.relative_to(root)}')
    if len(plans) > 40:
        print(f'- ... {len(plans) - 40} more')

    if args.apply:
        apply_plan(plans)
        print('\nApplied.')
    else:
        print('\nDry run only. Re-run with --apply to move files.')


if __name__ == '__main__':
    main()
