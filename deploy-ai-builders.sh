#!/usr/bin/env bash
# Deploy to AI Builders Space (space.ai-builders.com)
# Requires: AI_BUILDER_TOKEN in environment or in .env
set -e
[ -f .env ] && source .env
if [ -z "$AI_BUILDER_TOKEN" ]; then
  echo "Error: AI_BUILDER_TOKEN is not set. Add it to .env or run: export AI_BUILDER_TOKEN=your_token"
  exit 1
fi
REPO_URL="https://github.com/zijianxcode/personal-homepage"
SERVICE_NAME="personal-homepage"
BRANCH="main"
curl -s -X POST "https://space.ai-builders.com/backend/v1/deployments" \
  -H "Authorization: Bearer $AI_BUILDER_TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"repo_url\":\"$REPO_URL\",\"service_name\":\"$SERVICE_NAME\",\"branch\":\"$BRANCH\"}"
