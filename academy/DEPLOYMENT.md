# 部署说明（jujutsu-sci）

> **生产发布权威文档不在本仓库。**  
> bananabox.plus 整站（含 `/` 个人主页与 `/academy/`）请以 personal-homepage 为准：

`/Users/zijian/Documents/Code/personal-homepage/docs/DEPLOYMENT-STABLE.md`

## 日常唯一命令

```bash
cd /Users/zijian/Documents/Code/jujutsu-sci
./auto_sync_site.sh sync
```

自动完成：生成 HTML → push 本仓库 → 镜像 `personal-homepage/academy/` → push → CloudBase **整站**部署 → 验收。

## 本仓库角色

| 产物 | 去向 |
|------|------|
| 根目录 `*.html` | push 到 `jujutsu-sci`（GitHub 备份 / 可选 GitHub Pages 预览） |
| 镜像 rsync | `personal-homepage/academy/` only |

**禁止**单独 `tcb hosting deploy` 本仓库产物到 CloudBase 根路径。

## 镜像与同步细节

见 [CONTENT_SYNC.md](./CONTENT_SYNC.md)。

## 故障记录

见 [ISSUE_LOG.md](./ISSUE_LOG.md)。

## 已废弃路径

- iCloud `学术小龙虾-web`（脚本已 DEPRECATED + exit 1）
- `personal-homepage/academy/*.md` 运维文档（不应出现在公网，已自 homepage 仓库移除）
