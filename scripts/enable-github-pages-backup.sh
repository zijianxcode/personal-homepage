#!/bin/bash
set -euo pipefail

REPO="zijianxcode/personal-homepage"
BACKUP_ACADEMY="https://zijianxcode.github.io/personal-homepage/academy/"

echo "Checking GitHub Pages status for ${REPO}..."

if gh api "repos/${REPO}/pages" >/tmp/gh-pages-status.json 2>/tmp/gh-pages-status.err; then
  echo "GitHub Pages already enabled:"
  cat /tmp/gh-pages-status.json
  if python3 -c 'import json; d=json.load(open("/tmp/gh-pages-status.json")); raise SystemExit(0 if d.get("cname") else 1)'; then
    echo "Removing custom domain from GitHub Pages so cold standby stays on github.io..."
    gh api -X PUT "repos/${REPO}/pages" -f 'cname='
  fi
else
  echo "Enabling GitHub Pages from main branch root..."
  gh api -X POST "repos/${REPO}/pages" \
    -f build_type=legacy \
    -f 'source[branch]=main' \
    -f 'source[path]=/'
  echo "GitHub Pages enabled."
fi

echo
echo "Waiting for backup URL to become reachable..."
for attempt in $(seq 1 12); do
  code="$(curl -s -o /dev/null -w '%{http_code}' "${BACKUP_ACADEMY}" || true)"
  if [ "$code" = "200" ]; then
    echo "Backup academy URL is live: ${BACKUP_ACADEMY}"
    exit 0
  fi
  echo "Attempt ${attempt}/12: HTTP ${code:-000}, retrying in 10s..."
  sleep 10
done

echo "WARNING: GitHub Pages enabled but ${BACKUP_ACADEMY} is not 200 yet."
echo "It can take a few minutes after the first enable."
exit 0
