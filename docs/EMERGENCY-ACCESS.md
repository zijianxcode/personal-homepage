# 应急访问机制

像备用电源一样，站点按三层入口设计。主站故障时，按顺序切换下一层即可继续访问。

## 三层入口

| 层级 | 用途 | 研究所入口 |
|------|------|------------|
| 主站 | 日常生产 | https://bananabox.plus/academy/ |
| CloudBase 直连 | 域名 / DNS / 证书异常 | https://homepage-1gthisc4771d43ac-1256690240.tcloudbaseapp.com/academy/ |
| GitHub Pages 冷备 | CloudBase 整体不可用 | https://zijianxcode.github.io/personal-homepage/academy/ |

应急说明页（建议收藏）：

- https://bananabox.plus/emergency/
- https://zijianxcode.github.io/personal-homepage/emergency/

## 发布时自动维护

`./auto_sync_site.sh sync` 在 CloudBase 部署与验收后会自动：

1. 运行 `npm run health:production` 探测三层入口
2. 更新 `emergency/status.json` 并同步到 CloudBase
3. 检查 GitHub Pages 冷备是否可用（首次需手动启用，见下）

GitHub 冷备与 `personal-homepage` 的 `main` 分支 push 同步，不额外增加日常操作。

## 首次启用 GitHub Pages 冷备

只需执行一次：

```bash
cd /Users/zijian/Documents/Code/personal-homepage
npm run backup:enable-github-pages
```

## 手动探测

```bash
cd /Users/zijian/Documents/Code/personal-homepage
npm run health:production
```

- 退出码 `0`：主站正常
- 退出码 `2`：主站不可用，但至少有备用层可用（脚本会打印推荐 URL）
- 退出码 `1`：各层均不可用

写入状态并同步到线上说明页：

```bash
npm run health:production:sync
```

## 故障切换建议

1. 主站打不开 → 先试 CloudBase 直连
2. 直连也不行 → 改用 GitHub Pages 冷备
3. 需要对外说明时 → 分享 `/emergency/` 页面

## 不做的事

- 不做 DNS 自动切换：个人站点上 DNS 宕机切换成本高、生效慢，手动切换更可控
- 不把 `*.tcloudbaseapp.com` 作为日常公开入口：仅应急使用
