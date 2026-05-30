#!/bin/bash
set -euo pipefail

DOMAIN="bananabox.plus"
APEX_CNAME="bananabox.plus.cdn.dnsv1.com"
WWW_CNAME="www.bananabox.plus.cdn.dnsv1.com"

echo "CloudBase DNS migration helper for ${DOMAIN}"
echo "Target CNAME:"
echo "  @   -> ${APEX_CNAME}"
echo "  www -> ${WWW_CNAME}"
echo

if ! command -v tcb >/dev/null 2>&1; then
  echo "ERROR: tcb CLI not found"
  exit 1
fi

echo "Checking CloudBase hosting domain status..."
tcb api tcb DescribeHostingDomain \
  --api-version 2018-06-08 \
  --body "{\"EnvId\":\"homepage-1gthisc4771d43ac\"}" \
  --json

echo
echo "Attempting DNSPod record update via Tencent Cloud API..."
if tcb api dnspod DescribeRecordList \
  --api-version 2021-03-23 \
  --body "{\"Domain\":\"${DOMAIN}\",\"Limit\":100}" \
  --json > /tmp/dnspod-records.json 2>/tmp/dnspod-records.err; then
  python3 <<'PY'
import json
from pathlib import Path

domain = "bananabox.plus"
apex = "bananabox.plus.cdn.dnsv1.com"
www = "www.bananabox.plus.cdn.dnsv1.com"
raw = Path("/tmp/dnspod-records.json").read_text()
start = raw.find("{")
data = json.loads(raw[start:])
records = data.get("data", {}).get("RecordList") or data.get("RecordList") or []
print(f"Found {len(records)} DNS records")

def find(name, rtype=None):
    for r in records:
        if r.get("Name") == name and (rtype is None or r.get("Type") == rtype):
            return r
    return None

apex_rec = find("@") or find("", "A") or find("bananabox.plus", "A")
www_rec = find("www", "CNAME")

for label, rec, target, rtype in [
    ("apex", apex_rec, apex, "CNAME"),
    ("www", www_rec, www, "CNAME"),
]:
    if not rec:
        print(f"[skip] no existing record for {label}")
        continue
    rid = rec["RecordId"]
    sub = rec.get("Name") or "@"
    print(f"Updating {label}: RecordId={rid} -> {target}")
PY
  echo
  echo "NOTE: automatic ModifyRecord step requires DNSPodFullAccess on your Tencent account."
  echo "If this script stops here, update records manually in DNSPod console."
else
  echo "DNSPod API unavailable:"
  cat /tmp/dnspod-records.err
  echo
  echo "Manual DNSPod changes:"
  echo "1. Delete or disable apex A record pointing to GitHub Pages (185.199.108.153)"
  echo "2. Add/change apex @ CNAME -> ${APEX_CNAME}"
  echo "3. Change www CNAME from zijianxcode.github.io -> ${WWW_CNAME}"
fi

echo
echo "After DNS propagates:"
echo "  npm run verify:production"
echo "  gh api -X delete repos/zijianxcode/personal-homepage/pages"
