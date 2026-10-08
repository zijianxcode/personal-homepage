# FIELD 接入 · 2026-10-08

用户授权将现有 FIELD 迷彩工具加入 Visual Coding，使用指定的黑白迷彩附件作为封面，沿用既有发布要求。新卡片为列表首位，标题中英均为 FIELD，不另取中文名字。

- 作品列表：`https://bananabox.plus/visual-coding.html`
- 正式体验：`https://bananabox.plus/field-camo/`
- 源码：`/Users/zijian/Documents/ChatGPT/Vibe coding/field-camo`
- 主站运行目录：`field-camo/`。仅运行文件和本地素材，不复制测试、参考图或 Markdown 文档。
- 封面：`Assets/img/field-camo-cover.png`，1008×1008，contain 完整显示，hover 不放大。SHA-256 `ee013c19c735284eb871c6effaf083edc53485edc2376af76c8c1df9ff6e6bb9`，与用户附件一致。

## 构建与功能

源码执行 `npm run build -- --base=/field-camo/`，复制 dist 至主站同名目录。所有动态示例照片与白模 PNG 使用 Vite BASE_URL；Worker 与 HTML 图像由构建原生生成子路径。线上常驻 `← VISUAL CODING`，移动端滚动仍保留在右上角。生产入口自动沿用主站域名防护，开发源码不受限制，不发布 source map。

默认 Tile 展示迷彩展开图，Repeat 检查连续平铺。用户选择 Product 后才加载白模素材并显示玩具图像预览，保留表面光影，既有参数实时映射；White model 对比原白模。预览是固定视角图像映射，不是可旋转三维模型。PNG/SVG 导出仍为迷彩图案单元。照片提取在浏览器 Worker 中执行，没有图片上传接口或新增外部运行依赖。

## 发布与回滚

1. 主站先 fetch origin 并确认 main 同步。本机现有 HTTP 代理可按单次命令使用，不改变全局 Git 配置。
2. 迷彩源码执行单元测试和子路径构建，复制静态运行文件。
3. 主站两种构建脚本均包含 field-camo。执行权限、结构、防护和部署包检查。
4. 实际浏览器在正式域名上下文用请求路由验证待发布的生产防护包；同时以本地静态子路径审计性能。
5. 仅按 `CI=1 npm run deploy` 整站 CloudBase 流程发布；随后 `npm run verify:production`、`npm run health:production` 并实测主域正式入口。
6. 按主站规范提交并推送 GitHub main，不改写 academy 或主站根目录。

回滚：移除本次卡片和两种构建脚本中的 field-camo，恢复本次 CSS 与文档改动，按同一整站流程重新发布。无需改动其他项目素材或云端权限。

## 发布前证据

- 源码核心测试 25/25；原应用完整浏览器流程 54/54、运行时异常 0。
- 权限测试 4/4、防护测试 4/4；Things、站点结构与部署包检查通过。待发布包自动覆盖九个页面和十四个脚本。
- 生产防护包浏览器验证 20 项通过：原封面完整、中英卡片、五类宽度（375/390/430/768/1440）、移动端滚动常驻导航、白模/配色/示例切换、Worker、平铺与 PNG/SVG 下载、返回列表和异域复制跳转。没有新项目资源失败或页面异常。
- 本地静态产物 Lighthouse 桌面性能 98，LCP 0.7 s，TBT 120 ms，CLS 0.007；代表本次审计环境，不能代替真机性能。
- 项目证据：`output/playwright/hosting-local-results.json`、`hosting-local-cover.png`、`hosting-local-390.png`、`hosting-local-1440.png`、`hosting-lighthouse-desktop.json`。
- 同一产物模拟移动网络审计为 64，LCP 3.7 s，TBT 1450 ms，CLS 0。移动布局与功能通过不代表慢网性能达到桌面结果；原报告为项目 `hosting-lighthouse-mobile.json`，首次白模素材加载与映射准备仍有优化空间。

## 正式发布结果

CloudBase 整站上传成功，284 个文件，失败 0。正式域名的浏览器交互 19 项通过：新卡片与完整封面、中英标题、五类宽度、手机滚动返回、白模/配色/示例切换、Worker、平铺、PNG/SVG 下载和返回列表。没有新项目资源错误或页面异常。

正式运行文件与封面共 11 个，HTTP 200 且 SHA-256 全部匹配待发布包。指定封面 SHA-256 与原附件一致。主站 `/`、`/academy/` 生产验证与健康检查通过。

线上证据保存在源码项目 `output/playwright/hosting-production-results.json`、`hosting-production-files.json`、`hosting-production-cover.png`、`hosting-production-390.png`、`hosting-production-1440.png`、`hosting-production-export.png` 和 `hosting-production-export.svg`。整站上传、结构与健康日志保存在主站 `output/playwright/field-camo-*.log`。模拟手机性能 64 的限制仍保留，不把布局检查当作性能达标。

## 2026-10-08 · 默认视图调整

默认展开图，初次打开不请求或准备玩具素材。选择 Product 后才加载并展示玩具，准备期间切回 Tile 仍保持展开图，后续 Product 切换复用已准备素材。核心测试 25/25，待发布包 23 项、正式域名 22 项浏览器检查通过，涵盖初始状态、延迟素材加载、切换、白模比较、配色、五类宽度和平铺导出，资源错误与页面异常均为 0。整站再次上传 284 个文件，失败 0；主页与 academy 生产验证、健康检查通过。当前默认展开图截图为源码 output/playwright/hosting-production-tile.png。
