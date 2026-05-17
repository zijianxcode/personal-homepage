# 部署发布说明

## 当前状态

项目已经推送到 GitHub 仓库：
[zijianxcode/jujutsu-sci](https://github.com/zijianxcode/jujutsu-sci)

## 当前适合的发布方式

这是一个纯静态项目，最适合以下平台：
- GitHub Pages
- Vercel
- Netlify

当前项目实际上有两条发布链路：
- GitHub Pages：
  对应 [zijianxcode.github.io/jujutsu-sci](https://zijianxcode.github.io/jujutsu-sci/)
- CloudBase 子站：
  对应 [bananabox.plus/academy/](https://bananabox.plus/academy/)

这两条链路不是自动联动的。

## GitHub Pages 推荐方式

如果要用 GitHub Pages，最直接的方式是：
1. 打开 GitHub 仓库设置
2. 进入 `Pages`
3. Source 选择 `Deploy from a branch`
4. Branch 选择 `main`
5. Folder 选择 `/ (root)`

因为当前首页入口就是根目录下的 `index.html`，所以不需要额外打包。

## 后续更新流程

如果网站内容有更新，推荐按这条流程走：
1. 在源目录中更新 Markdown 内容
2. 运行 `python3 sync_from_source.py`
3. 本地检查生成结果
4. 提交 Git 变更
5. 推送到 GitHub
6. 如果只需要 GitHub Pages，等待 Pages 自动更新
7. 如果 `bananabox.plus/academy/` 也要更新，再做下面两步：
8. 把最新静态产物同步到 `personal-homepage` 仓库的 `academy/` 子目录
9. 在 `personal-homepage` 项目中重新执行 CloudBase 发布

## academy 子站发布规则

只要学术站有改动，并且希望 `bananabox.plus/academy/` 同步展示，就必须满足这条规则：

1. 本地：
   当前仓库生成结果必须是最新的。
2. 仓库：
   `jujutsu-sci` 必须先推到远端，保证学术站源码仓库有记录。
3. CloudBase：
   `personal-homepage` 的 `academy/` 必须重新覆盖同步，并重新部署到 CloudBase。

注意：
- `bananabox.plus/academy/` 读取的是 `personal-homepage` 的发布产物，不直接读取 `jujutsu-sci`。
- 只推 GitHub 不发布 CloudBase，会出现“GitHub Pages 新，academy 旧”的情况。
- 只更新 `academy/` 本地目录但不推 `personal-homepage`，线上也不会变。
- 本地生成、镜像同步和部署包准备可以先做，但 `推送 GitHub` 与 `执行 CloudBase 发布` 必须经过人工确认。

## academy 镜像同步范围

如果只是定时内容同步，并且确认只有生成的 HTML 数据页变化，可以只同步 HTML。

但凡涉及首页 UI、CSS、详情页交互、搜索脚本、图片或评分展示逻辑，不能只同步 `*.html`。至少需要同步：

```bash
rsync -a \
  *.html site.css site-detail.js site-index.js gojo.jpg \
  /Users/zijian/Documents/Code/personal-homepage/academy/
```

避坑说明：
- `index.html` 内容更新但 `site.css` 未同步，会导致 CloudBase 线上仍呈现旧布局。
- `site-detail.js` 或 `site-index.js` 未同步，会导致详情页目录、搜索、Obsidian 复制等交互停留在旧逻辑。
- 同步后要在 `personal-homepage` 中提交并推送，再执行 CloudBase 发布。
- 发布前建议用 `rg` 检查 `.cloudbase-deploy/academy/index.html` 是否包含本次关键文本，例如 `五条老师评定 8.5/10`。

## CloudBase 发布参考

个人主页项目路径：
`/Users/zijian/Documents/Code/personal-homepage`

常用流程：
```bash
cd /Users/zijian/Documents/Code/personal-homepage
rm -rf .cloudbase-deploy
mkdir -p .cloudbase-deploy
cp *.html CNAME .nojekyll .cloudbase-deploy/
cp -r Assets projects documents academy time-ink .cloudbase-deploy/
TCB_ENV_ID='homepage-1gthisc4771d43ac' \
  npm exec --yes --package @cloudbase/cli@2.12.2 -- \
  tcb hosting deploy .cloudbase-deploy .
```

说明：
- 这里必须使用真实的 `TCB_ENV_ID`
- 不能依赖 `cloudbaserc.json` 里的占位符 `{{env.TCB_ENV_ID}}`
- 发布前先确认 `.cloudbase-deploy/academy/` 已经包含最新文件，例如 `starred.html`

## 线上常见现象

GitHub Pages 更新后，可能出现这些“看起来像没更新”的情况：
- 页面还在构建，几分钟内还没刷新完成
- 浏览器命中了旧缓存
- 仓库已经更新，但站点还没完成部署

遇到这种情况，建议按这个顺序确认：
1. 先看仓库最新提交是否已经推到 `main`
2. 再看网页源码或生成产物是否已经包含新内容
3. 如果访问的是 `bananabox.plus/academy/`，继续确认 `personal-homepage/academy/` 是否也已更新
4. 确认 CloudBase 发布是否成功
5. 最后再等 CDN 或浏览器缓存刷新

## 发布前建议

正式上线前，建议再补几项：
- 一个更完整的项目简介
- 一个对外可读的首页说明
- 仓库封面图或社交分享图
- 一个更稳定的 logo / favicon 方案

## 记录要求

以后凡是遇到部署延迟、线上页面未刷新、GitHub Pages 异常等问题，也统一记录到：
- [问题记录与修复日志](ISSUE_LOG.md)
