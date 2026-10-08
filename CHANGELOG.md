## 2026-10-08 · FIELD 预览入口常驻

- 把 Tile / Repeat / Product 固定到左侧顶部，避免入口藏在参数末尾。
- 选择 Product 后立即显示立方体编号和 Add cube / Remove；仍默认展示迷彩展开图。

## 2026-10-08 · FIELD 封面修复

- 用更清晰的黑白线条修复版替换模糊封面，保留完整方形构图与不放大的展示方式。图库及分享图采用新图片地址，原图在源码参考目录归档。

## 2026-10-08 · FIELD 立方体叠放

- 用柔和光影的圆角立方体替换小人，迷彩随三个面的透视投影。
- 左侧 Product 支持 Add cube / Remove（1–8 个）及数字选择，每个立方体保留各自图案。默认展开图和 PNG/SVG 迷彩导出保持现有行为。
- 移除运行目录中的旧玩具素材，原资产在源码参考目录归档；无新增外部运行依赖。

## 2026-10-08 · FIELD 默认展开图

- FIELD 默认展示 Tile 迷彩展开图；选择 Product 后才加载并展示玩具，白模比较控件随 Product 显示。

# Changelog

## 2026-10-08 · FIELD 接入（v1.7.0 之后）

- 新项目 `/field-camo/`：照片主体取色与轮廓编译、连续迷彩、玩具白模表面预览、PNG/SVG 导出。
- 用户指定黑白 PNG 封面原字节保留，最新卡片位于 Visual Coding 首位，标题保持 FIELD。
- 正式子路径原生构建，移动端常驻返回入口，生产域名校验沿用自动发布处理。


## v1.7.0 — 2026-10-08

**主题：Visual Coding 作品扩展、性能优化与网站安全加固**

汇总自 v1.6.1 以来的主要站点变化。本次版本更新只修改版本元数据和发布记录，近期功能与安全变更已经上线。

### 作品与内容

- Visual Coding 扩展至七个项目：在两个时钟基础上新增 Card Freeze、Effecter、Vibe Fiber、Far From Here 和 Grid Poster，统一按最新作品优先展示。
- 新项目通过主域独立子目录提供体验，常驻右上角返回作品列表入口，统一中英文标题、指定封面与移动端布局。
- Effecter 提供图片特效体验，AI 模型与 WASM 从同域加载，大模型及下载分片不纳入普通 Git 追踪。
- Vibe Fiber 支持文字与图案织入、针织/机织及图片处理 Worker；优化掩码采样范围、字体测量缓存和针目贴图复用。
- Far From Here 提供 3D / 2D 对应、合拢展开和 DJ 循环/搓碟学习演示；发布所需九个片段，音乐生成资产不进入 Git。
- Grid Poster 提供网格海报编辑、文字/配色调整、中英切换、PNG / SVG 导出。
- Things 增加体验与智能产品创新等课程入口，Academy 继续按既有内容管线同步。

### 网站复制防护

- 生产构建从 Visual Coding 卡片自动发现本地项目入口，保护作品列表与七个项目页。
- 添加官方域名运行校验；Vibe Fiber 与两个时钟脚本压缩/混淆，既有应用 bundle 保留原代码并加独立域名校验。
- 生产脚本增加内容哈希缓存标记，部署验收检查保护版本、文件哈希与入口 source map。
- 该措施提高直接复制网站的使用成本；公开客户端文件仍可下载，不能替代服务端访问控制。

### 安全与发布检查

- HCI 课程迁入共享服务端许可资源，六个 Things 页面统一通过 token 请求内容；原课程访问码与内容保持兼容。
- `bananabox.plus`、`www.bananabox.plus` 强制 HTTP → HTTPS，并启用短期 HSTS、nosniff 与 Referrer-Policy。
- 增加课程页与部署产物检查，禁止前端明文许可码/内容列表；增加 API 身份、签名、过期、资源隔离和 CORS 测试。
- GitHub CI 使用 Node 22 与只读仓库权限；生产部署执行安全测试。
- 完善 CloudBase 登录过期恢复与中断后继续同步的说明，继续保护 `/` 与 `/academy/` 的站点结构。

### 验证与版本包

- API 权限测试 4 项、复制防护测试 4 项、课程访问和站点结构检查通过。
- 七个项目入口/交互浏览器检查通过；六个许可资源与原管理员登录验证通过，主站与 Academy 线上验收通过。
- 完整生产静态包包含当前模型、WASM 与音乐片段；附文件清单、源码提交标识和 SHA-256 校验文件。
- 包中不包含环境变量、私信数据库、本地审计报告、node_modules 或 Git 元数据；云函数配置和托管安全策略需单独维护。

详见 [v1.7.0 版本说明](docs/releases/v1.7.0.md)。此前已公开许可码的保密性、后端多实例限流、运行时维护和统计接口问题不在本次版本记录中宣称全部解决。

## 2026-10-07 · Far From Here 学习演示

- Visual Coding 新增第 06 项并放在首位，使用用户指定原 PNG，contain 完整显示，保留中英切换。
- 正式入口 `/far-from-here/`：3D / 2D 对应、合拢展开、DJ 打击垫、九个循环片段和三种随机模拟搓碟；右上常驻返回作品列表。
- 发布包原生支持子路径，只部署必需九个音乐片段，原 MP3 与研究处理文件不部署；音乐生成资产不进入 GitHub。
- 五种屏幕宽度、线上模型 / 声音 / 搓碟 / 返回实测通过，主站与 academy 验收及健康检查通过。桌面 Lighthouse 性能 99，模拟移动网络 42，慢网首载优化仍待处理。
- 源码与完整发布证据：`/Users/zijian/Documents/ChatGPT/Vibe coding/far-from-here-study/docs/部署说明.md`。


## v1.6.1 — 2026-05-30

**主题：站点结构保护与发布验收加固**

### 修复

- 修复 CloudBase 根路径被 academy 内容覆盖导致个人主页消失的问题
- 修复 `npm run deploy` 因缺少 `CNAME` 文件而构建失败、整站未能上传的问题

### 加固

- `verify:production` 同时验收 `/`（aspera ad astra）与 `/academy/`（研究所）
- 新增 `scripts/verify-deploy-bundle.js`，上传前检查 `.cloudbase-deploy/` 结构
- `health:production` 分层探测个人主页 + academy，根路径异常时 exit 3
- 新增 [docs/SITE-STRUCTURE.md](./docs/SITE-STRUCTURE.md)：结构默认不变，禁止单独 deploy academy 到根路径

### 文档与冗余清理（2026-05-30 晚）

- 移除 `academy/*.md` 公网副本（12 份过时文档，含错误 DEPLOYMENT 说明）
- 根目录 `更新记录-v1.5.md`、`安全整改记录` 迁入 `docs/archive/`
- 新增 `docs/README.md` 文档索引；jujutsu-sci `docs/DEPLOYMENT.md` 改为指向站点权威 runbook
- iCloud `学术小龙虾-web`：脚本已 DEPRECATED，新增 `DEPRECATED.md` 说明
- 构建时自动剔除 `academy/*.md`；部署后 `purge-academy-markdown-from-hosting.sh` 清理 CloudBase 残留
- `test:site-integrity` 禁止 `academy/` 下再出现 md

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
