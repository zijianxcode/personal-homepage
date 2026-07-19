# zijian — Personal Homepage

Static personal homepage (Work / Info / Things). Dark theme, particle background, CN/EN toggle.

**Domain**: [bananabox.plus](https://bananabox.plus)

## Latest Update

Updated on 2026-05-30 (`v1.6.1`):

- **结构保护**：`/`=个人主页、`/academy/`=研究所，默认不变；见 [docs/SITE-STRUCTURE.md](docs/SITE-STRUCTURE.md)
- **发布加固**：部署包本地验收 + 线上根路径/academy 双验收，防止主页再次被覆盖
- **v1.6.0**：CloudBase 生产迁移、单命令发布链、三层应急备用

详见 [CHANGELOG.md](CHANGELOG.md) · [docs/DEPLOYMENT-STABLE.md](docs/DEPLOYMENT-STABLE.md)

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

- Do not place access codes, protected links, admin entry keys, or API secrets in tracked frontend files.
- Public pages must not rely on client-side equality checks for access control.
- Third-party script execution is prohibited by default; use local vendored assets or server-owned endpoints first.
- New external dependencies require a security review and a concrete rollback path.
- Visitor analytics is currently running in shadow mode:
  - `busuanzi` remains temporarily enabled for comparison.
  - CloudBase self-hosted UV counting runs in parallel via `Assets/js/analytics.js`.
  - Remove the third-party counter only after the two data sources are verified to be stable enough for replacement.

## Structure

```
├── index.html                  ← 主页（Work / Info / Things 三 Tab）
├── visual-coding.html          ← Visual Coding 子页面（卡片网格）
├── projects/                   ← 独立实验作品
│   ├── floating-clock.html
│   └── kinetic-typography-clock.html
├── card-freeze/                ← Visual Coding #03 静态产物（源码见 zijianxcode/card-freeze）
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
- **Language**: 中/英双语，通过 `data-lang` 属性切换，CSS 控制显隐

## Tech Conventions

- Vanilla HTML/CSS/JS — 不使用框架
- CSS 自定义属性作为 Design Token
- 移动优先响应式设计
- Canvas 用于粒子系统和生成式视觉
- 独立实验使用单 HTML 文件
- 移动端适配不删除既有视觉动效；优先降低离屏、隐藏页、resize 和高 DPR 场景下的无效计算

## Naming

- 文件: `kebab-case`（如 `floating-clock.html`）
- CSS 类: 描述性命名，连字符分隔（如 `work-item--vc`）
- JS: `camelCase` 变量，`PascalCase` 类
- CSS 变量: `--` 前缀语义化命名（如 `--text-muted`, `--border`）
