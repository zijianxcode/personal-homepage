#!/bin/bash
set -euo pipefail

ENV_ID="homepage-1gthisc4771d43ac"

echo "Removing public academy/*.md from CloudBase (internal docs must not be served)..."

files=$(tcb hosting list academy/ -e "$ENV_ID" 2>/dev/null | rg 'academy/[^ ]+\.md' -o || true)

if [ -z "$files" ]; then
  echo "No academy markdown files on CloudBase."
  exit 0
fi

echo "$files" | while IFS= read -r path; do
  [ -z "$path" ] && continue
  echo "Deleting $path"
  tcb hosting delete "$path" -e "$ENV_ID"
done

echo "Done."
