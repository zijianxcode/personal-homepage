# 稳定发布说明（bananabox.plus）

## 站点结构（默认不变）

**个人主页**在 `/`，**学术研究所**在 `/academy/`。除非用户明确要求，不得改变 URL 层级或把 academy 内容部署到根路径。

完整约束见 [SITE-STRUCTURE.md](./SITE-STRUCTURE.md)。

## 唯一生产链路

国内访问以 **CloudBase 静态托管** 为权威来源。

```text
jujutsu-sci-source (Markdown)
        ↓
sync_from_source.py
        ↓
jujutsu-sci (HTML/CSS/JS)
        ↓
personal-homepage/academy/ (镜像)
        ↓
npm run deploy  →  CloudBase 整站（根路径 .）
        ↓
bananabox.plus/              ← 个人主页 aspera ad astra
bananabox.plus/academy/      ← 研究所
```

日常只需一条命令：

```bash
cd /Users/zijian/Documents/Code/jujutsu-sci
./auto_sync_site.sh sync
```

脚本会自动完成：生成 HTML → push `jujutsu-sci` → rsync `academy/` → push `personal-homepage` → **整站** CloudBase 部署 → 线上验收（含根路径）→ 应急状态同步。

## 本地路径（唯一）

| 用途 | 路径 |
|------|------|
| 源 Markdown | `/Users/zijian/Documents/Code/jujutsu-sci-source` |
| 站点生成 | `/Users/zijian/Documents/Code/jujutsu-sci` |
| 主站 + academy 镜像 | `/Users/zijian/Documents/Code/personal-homepage` |

不要使用 iCloud `学术小龙虾-web` 或 `2026sci1/学术小龙虾` 参与发布。

## 禁止操作

- `tcb hosting deploy academy/` 或任何「只部署 academy 到根路径」的命令
- 将 `academy/index.html` 复制到仓库根目录
- 跳过 `npm run deploy` 整站上传

## 手动发布（仅当 auto_sync 失败时）

```bash
cd /Users/zijian/Documents/Code/personal-homepage
npm run deploy
npm run verify:production
```

## 域名（已完成，2026-05-30）

| 域名 | CNAME 目标 | 状态 |
|------|------------|------|
| `bananabox.plus` | `bananabox.plus.cdn.dnsv1.com` | 已生效 |
| `www.bananabox.plus` | `www.bananabox.plus.cdn.dnsv1.com` | 已生效 |

GitHub Pages 保留为冷备（`github.io`，**不**绑定 `bananabox.plus`）：

```bash
npm run backup:enable-github-pages
```

## 验收标准（发布成功须全部通过）

```bash
npm run test:site-integrity
node scripts/verify-deploy-bundle.js
npm run verify:production
npm run health:production
```

必须同时满足：

- `/` 线上标题为 `aspera ad astra`（不能是「研究所」）
- `/academy/` 线上标题为 `研究所`
- `site.css?v=` 版本与本地 `academy/index.html` 一致

## 应急访问

详见 [EMERGENCY-ACCESS.md](./EMERGENCY-ACCESS.md)。

- 应急说明页：`https://bananabox.plus/emergency/`
- 健康探测：`npm run health:production`
