# Changelog

## v1.6.0 — 2026-05-30

**主题：生产性能与发布链路优化**

### 性能与可用性

- 生产面从 GitHub Pages 迁至 **CloudBase 静态托管**，国内访问走腾讯云 CDN（`bananabox.plus` → CloudBase）
- DNS 已切至 CloudBase CNAME，公网 apex / www 均验收通过
- 新增 **三层应急入口**（主站 → CloudBase 直连 → GitHub Pages 冷备），应急说明页 `/emergency/`
- GitHub Pages 保留为异构冷备（`github.io`，不绑定自定义域名）

### 发布链路

- 日常发布收敛为单命令：`./auto_sync_site.sh sync`（jujutsu-sci 目录）
- 自动完成：生成 HTML → 双仓库 push → CloudBase 整站部署 → 线上验收 → 应急状态同步
- 废弃 iCloud 旧发布路径；Hermes 定时任务不再单独 `tcb hosting deploy academy/`
- `quality-report.json` 加入 gitignore，避免质量报告阻断 HTML 同步

### 新增脚本与文档

- `npm run verify:production` — CloudBase + 公网验收
- `npm run health:production` — 三层入口健康探测
- `docs/DEPLOYMENT-STABLE.md` — 稳定发布说明
- `docs/EMERGENCY-ACCESS.md` — 应急访问说明

### 验收标准（发布成功须全部通过）

```bash
npm run test:site-integrity
npm run verify:production
npm run health:production
```
