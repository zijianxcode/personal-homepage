# 稳定发布说明（bananabox.plus / academy）

## 唯一生产链路

国内访问以 **CloudBase 静态托管** 为权威来源。GitHub 仅作代码备份，不再单独承担生产发布。

```text
jujutsu-sci-source (Markdown)
        ↓
sync_from_source.py
        ↓
jujutsu-sci (HTML/CSS/JS)
        ↓
personal-homepage/academy/ (镜像)
        ↓
npm run deploy  →  CloudBase 整站
        ↓
bananabox.plus/academy/
```

日常只需一条命令：

```bash
cd /Users/zijian/Documents/Code/jujutsu-sci
./auto_sync_site.sh sync
```

脚本会自动完成：生成 HTML → push `jujutsu-sci` → rsync `academy/` → push `personal-homepage` → CloudBase 整站部署 → 线上验收。

## 本地路径（唯一）

| 用途 | 路径 |
|------|------|
| 源 Markdown | `/Users/zijian/Documents/Code/jujutsu-sci-source` |
| 站点生成 | `/Users/zijian/Documents/Code/jujutsu-sci` |
| 主站 + academy 镜像 | `/Users/zijian/Documents/Code/personal-homepage` |

不要使用 iCloud `学术小龙虾-web` 或 `2026sci1/学术小龙虾` 参与发布。

## 手动发布（仅当 auto_sync 失败时）

```bash
cd /Users/zijian/Documents/Code/personal-homepage
npm run deploy
npm run verify:production
```

## 域名迁移（一次性）

CloudBase 自定义域名已绑定（2026-05-30）：

| 域名 | CNAME 目标 |
|------|------------|
| `bananabox.plus` | `bananabox.plus.cdn.dnsv1.com` |
| `www.bananabox.plus` | `www.bananabox.plus.cdn.dnsv1.com` |

当前 DNS 仍指向 GitHub Pages，需要在 **DNSPod** 修改两条记录：

1. 主机记录 `@`：删除 A 记录 `185.199.108.153`，改为 CNAME → `bananabox.plus.cdn.dnsv1.com`
2. 主机记录 `www`：CNAME 从 `zijianxcode.github.io` 改为 `www.bananabox.plus.cdn.dnsv1.com`

控制台直达：[DNSPod 解析记录](https://console.dnspod.com/dns/bananabox.plus/record)

DNS 生效后（通常 5–30 分钟）：

```bash
cd /Users/zijian/Documents/Code/personal-homepage
npm run verify:production
```

确认通过后，保留 GitHub Pages 作为冷备，但**不要**再绑定 `bananabox.plus` 自定义域名（会与 CloudBase 冲突）：

```bash
cd /Users/zijian/Documents/Code/personal-homepage
npm run backup:enable-github-pages
```

冷备地址：`https://zijianxcode.github.io/personal-homepage/academy/`

说明：当前 `tcb` 登录身份缺少 DNSPod API 写权限，DNS 记录需在控制台手动改，或给账号附加 `DNSPodFullAccess` 后运行 `scripts/migrate-dns-to-cloudbase.sh`。

## 验收标准

发布成功必须同时满足：

- `npm run test:site-integrity` 通过
- CloudBase deploy 成功
- `npm run verify:production` 通过（至少 CloudBase 项通过）
- academy 首页标题仍为 `研究所`
- `site.css?v=` 版本与本地 `academy/index.html` 一致

## 应急访问（备用电源）

主站故障时可按三层入口切换，详见 [EMERGENCY-ACCESS.md](./EMERGENCY-ACCESS.md)。

- 应急说明页：`https://bananabox.plus/emergency/`
- 健康探测：`npm run health:production`
- 首次启用 GitHub 冷备：`npm run backup:enable-github-pages`
