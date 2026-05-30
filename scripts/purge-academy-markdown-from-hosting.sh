#!/bin/bash
set -euo pipefail

ENV_ID="homepage-1gthisc4771d43ac"

echo "Removing public academy/*.md from CloudBase (internal docs must not be served)..."

mapfile -t files < <(tcb hosting list academy/ -e "$ENV_ID" 2>/dev/null | rg 'academy/[^ ]+\.md' -o || true)

if [ "${#files[@]}" -eq 0 ]; then
  echo "No academy markdown files on CloudBase."
  exit 0
fi

for path in "${files[@]}"; do
  echo "Deleting $path"
  tcb hosting delete "$path" -e "$ENV_ID"
done

echo "Done."
