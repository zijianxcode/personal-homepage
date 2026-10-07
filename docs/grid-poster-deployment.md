# Grid Poster 部署说明

发布时间：2026-10-08（Asia/Shanghai）

正式入口：https://bananabox.plus/grid-poster/
作品列表：https://bananabox.plus/visual-coding.html

## 真源与发布目录

源码：`/Users/zijian/Documents/kimi/tasks/2026-10-03/22-46-18-1eb2d1a3/grid-poster/`。
主站仓库：`/Users/zijian/Documents/Code/personal-homepage/`。
本次独立工作目录：`/Users/zijian/.config/superpowers/worktrees/personal-homepage/grid-poster/`，分支 `codex/publish-grid-poster`。
GitHub 的 `main` 保存站点发布文件。主站当前另有复制保护改动未完成；更新主站目录前应先合并本次发布提交，保留那项工作。

## 更新发布

1. 源码目录执行 `npm run build`。
2. 将 `dist/` 完整同步到主站的 `grid-poster/`；删除上一版的旧哈希资源。
3. 主站 `package.json` 的 `build` 与 `build:cloudbase` 必须包含 `grid-poster`。
4. 在已与 GitHub 最新 main 对齐的主站工作目录执行 `CI=1 npm run deploy`，按现有整站发布链上传。
5. 执行 `npm run verify:production`、`npm run health:production`，再检查正式入口、封面与导出。

## 本次接入

- 封面使用用户指定的 830 × 830 PNG 原图，保存在 `Assets/img/grid-poster-cover.png` 与 `grid-poster/cover.png`。
- 新作品位于 Visual Coding 列表首位，英文名 Grid Poster，中文名 Grid Poster · 网格海报。
- 体验页右上角增加常驻 `← VISUAL CODING` 返回入口。
- 手机端将工具栏、版式面板与预览按纵向排列，保留全部功能。
- 补齐本地 favicon、页面描述、canonical 与 OG 信息。
- Tailwind 只扫描实际使用的界面文件；Kimi 检查属性插件仅用于开发。CSS 从 84 KB 降至 16 KB。

## 验证证据

- TypeScript / Vite 构建通过，主站 Things access、site integrity 与部署包结构检查通过。
- Playwright 检查 375、390、430、768、1440px：页面无横向溢出，返回链接高度 44px。
- 验证文字编辑、中英文切换、配色与内容面板、PNG / SVG 下载。
- 生产浏览器验证列表首位封面、项目入口、资源加载、SVG 下载与返回列表。
- 正式域名主页和 academy 均通过发布与健康检查。
- Lighthouse 本地生产构建：移动性能 91，LCP 2.8s，CLS 0，TBT 100ms；该成绩来自本地测试，未声明为公网性能分数。
- 部署产物未发现明文密钥模式或外部脚本引用。
- 主站现有统计接口返回 500，统计降级与本次项目功能无关；未改动该接口。

截图、导出样例与 Lighthouse 报告保存在源码目录 `output/playwright/`。
