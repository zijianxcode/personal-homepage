# zijian — Personal Homepage

Static personal homepage (Work / Info / Things). Dark theme, particle background, CN/EN toggle.

**Domain**: [bananabox.plus](https://bananabox.plus)

## Latest Project

2026-10-08：FIELD 接入 Visual Coding，当前共八个项目。使用用户指定黑白 PNG 封面，提供照片取色与轮廓编译、连续迷彩、玩具白模预览及 PNG/SVG 导出。正式入口为 `/field-camo/`；发布记录见 [FIELD 接入](docs/engineering/field-camo.md)。

## Latest Update

Updated on 2026-10-08 (`v1.7.0`):

- **作品扩展**：Visual Coding 共七个项目，近期接入 Card Freeze、Effecter、Vibe Fiber、Far From Here、Grid Poster，统一倒序展示和返回入口。
- **性能优化**：Vibe Fiber 减少像素读取、字体重复测量和针目绘制开销。
- **复制防护**：生产构建自动覆盖作品列表与项目入口，增加域名校验、脚本压缩/混淆和缓存版本标记。
- **安全加固**：六类 Things 课程统一服务端鉴权，主域强制 HTTPS，发布流程与 CI 增加权限测试。
- **版本包**：[v1.7.0 Release](https://github.com/zijianxcode/personal-homepage/releases/tag/v1.7.0) 提供完整生产静态包和 SHA-256 校验文件；见 [版本说明](docs/releases/v1.7.0.md)。

详见 [CHANGELOG.md](CHANGELOG.md) · [docs/DEPLOYMENT-STABLE.md](docs/DEPLOYMENT-STABLE.md)

## 项目注意事项

统一规则以 [项目规范文档.txt](项目规范文档.txt) 为准；Visual Coding 的作品倒序与体验页右上角返回入口见其中「Visual Coding 项目统一规则（强制）」。

## Run locally

```bash
npx serve .
# or
python3 -m http.server 8080
```

## Deploy

- **Production (domestic)**: CloudBase static hosting via `npm run deploy`
- **GitHub**: [zijianxcode/personal-homepage](https://github.com/zijianxcode/personal-homepage) stores source + mirrored `academy/`; push to `main` for backup only
- **Academy sync entry**: run `./auto_sync_site.sh sync` in `/Users/zijian/Documents/Code/jujutsu-sci`
- **Stable release doc**: [docs/DEPLOYMENT-STABLE.md](docs/DEPLOYMENT-STABLE.md) · [docs/README.md](docs/README.md)

## academy Sync Rule

`academy/` is mirrored from `/Users/zijian/Documents/Code/jujutsu-sci` into this repo, then deployed to CloudBase as part of the full site.

Production URL: [https://bananabox.plus/academy/](https://bananabox.plus/academy/)

Release chain:

```text
jujutsu-sci-source → sync_from_source.py → jujutsu-sci → personal-homepage/academy/ → CloudBase
```

Do not use iCloud `学术小龙虾-web` for publishing.

Manual fallback:

```bash
cd /Users/zijian/Documents/Code/personal-homepage
npm run deploy
npm run verify:production
```

Emergency access (when primary is down): [docs/EMERGENCY-ACCESS.md](docs/EMERGENCY-ACCESS.md)

Any new site project added under this homepage must ship under the main domain as:

- `https://bananabox.plus/<project-slug>/`

Do not use temporary provider domains such as `*.tcloudbaseapp.com`, `*.app.tcloudbase.com`, or `vercel.app` as the public production entry linked from the site.

Required pattern:

1. Put the published static output in a repo-root folder named after the slug, e.g. `time-ink/`
2. Ensure `npm run build` and `npm run deploy` include that folder
3. Link the project detail page CTA to `../<project-slug>/` so the live button resolves to the main-domain path
4. Verify the production URL on `bananabox.plus/<project-slug>/` after each publish

Root safety rule:
- Academy generated files must never be copied to the repo root.
- The repo-root `index.html` is the personal homepage. The academy homepage must only live at `academy/index.html`.
- `npm run build` and `npm run deploy` run `npm run test:site-integrity` first.

## Security Notes

- Visual Coding production builds automatically bind the local projects linked from the showcase and their
  showcase page to the official domains. Vibe Fiber and the two clock scripts are
  minified/obfuscated; existing application bundles retain their original code
  after an obfuscated domain guard. This deters direct site copying and is not
  authentication or HTTP download prevention. Source remains unchanged.
  See [website copy protection](docs/engineering/visual-coding-copy-protection.md).

- Do not place access codes, protected links, admin entry keys, or API secrets in tracked frontend files.
- Public pages must not rely on client-side equality checks for access control.
- All six Things course pages use server-side permit resources; keep codes and content in CloudBase environment configuration.
- CI and production deployment run `npm run test:security` and `npm run test:things-access`.
- Production custom domains enforce HTTPS and basic security response headers. Inspect or restore settings with `scripts/harden-hosting-security.js`; its backup stays local.
- Third-party script execution is prohibited by default; use local vendored assets or server-owned endpoints first.
- New external dependencies require a security review and a concrete rollback path.
- CloudBase self-hosted UV counting runs via `Assets/js/analytics.js`; legacy counter DOM identifiers remain in use.

## Structure

```
├── index.html                  ← 主页（Work / Info / Things 三 Tab）
├── visual-coding.html          ← Visual Coding 子页面（卡片网格）
├── projects/                   ← 独立实验作品
│   ├── floating-clock.html
│   ├── kinetic-typography-clock.html
│   └── effecter/                ← 图片特效工具；Visual Coding GIF 封面与体验入口
├── card-freeze/                ← Visual Coding #03 静态产物（源码见 zijianxcode/card-freeze）
├── vibe-fiber/                 ← Visual Coding #05 完整织字与图案 Demo
├── far-from-here/             ← Visual Coding #06，3D / 2D 与 DJ 音乐学习演示
├── grid-poster/               ← Visual Coding #07，网格海报编辑器
├── field-camo/                ← Visual Coding #08，迷彩生成与玩具表面预览
├── Assets/
│   ├── css/style.css           ← 全局样式 + CSS 变量
│   ├── js/
│   │   ├── script.js           ← Tab 切换、语言切换、粒子背景
│   │   ├── particle-title.js   ← 粒子标题动效
│   │   └── vc-page.js          ← Visual Coding 页面逻辑
│   ├── vendor/                 ← 本地化第三方运行时依赖
│   └── img/
├── server.py                   ← 容器部署用 HTTP 服务
├── Dockerfile
├── cloudbaserc.json
└── .cursor/rules/              ← AI 协作规则
```

## Design Direction

- **Aesthetic**: 深色、排版驱动、编辑感。灵感来源于时尚杂志和奢侈品牌。
- **Typography**: Libre Baskerville（衬线主体）+ Inter（UI/导航），`clamp()` 响应式字号
- **Color**: 深色优先，背景 `#0a0a0a`，文字 `#ffffff`，辅助文字 `rgba(255,255,255,0.45)`
- **Layout**: 桌面 60px 边距，移动端 20px 边距，响应断点 768px / 480px
- **Mobile Baseline**: 手机端优先保证单列可读、卡片间距舒展、按钮触控区不小于 44px，hover 效果必须有 touch / active 等价反馈
- **Motion**: 有目的的动画 — 引导注意力、提供反馈、建立空间关系
- **Language**: 中/英双语，通过 `data-lang` 属性切换，CSS 控制显隐；英文课程标题默认使用全大写，除非用户明确指定其他写法

## Tech Conventions

- Vanilla HTML/CSS/JS — 不使用框架
- CSS 自定义属性作为 Design Token
- 移动优先响应式设计
- Canvas 用于粒子系统和生成式视觉
- 独立实验使用单 HTML 文件
- Effecter 使用构建后的 React/Worker/WebGL 静态文件，发布于 `/projects/effecter/`；源码与发布步骤见 `/Users/zijian/Documents/ChatGPT/Vibe coding/plexus-studio/部署说明.md`。
- Vibe Fiber 使用原生 Canvas 与本地图案提取 Worker，发布于 `/vibe-fiber/`。Visual Coding 封面为用户指定的 GIF；源码与发布记录见 `/Users/zijian/Documents/ChatGPT/Vibe coding/knit-type/部署说明.md`。
- 移动端适配不删除既有视觉动效；优先降低离屏、隐藏页、resize 和高 DPR 场景下的无效计算

## Naming

- 文件: `kebab-case`（如 `floating-clock.html`）
- CSS 类: 描述性命名，连字符分隔（如 `work-item--vc`）
- JS: `camelCase` 变量，`PascalCase` 类
- CSS 变量: `--` 前缀语义化命名（如 `--text-muted`, `--border`）

Far From Here 的源码、素材出处与部署记录见 `/Users/zijian/Documents/ChatGPT/Vibe coding/far-from-here-study/docs/部署说明.md`。封面为用户指定 PNG，正式入口 `/far-from-here/`。音乐片段为本机生成的部署素材，不进入 Git。

Grid Poster 为网格海报编辑工具，正式入口 `/grid-poster/`。封面使用用户指定 PNG，作品按新增顺序位于 Visual Coding 列表首位。源码与发布记录见 `/Users/zijian/Documents/kimi/tasks/2026-10-03/22-46-18-1eb2d1a3/grid-poster/部署说明.md`。
