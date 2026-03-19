# zijian — Personal Homepage

Static personal homepage (Work / Info / Things). Dark theme, particle background, CN/EN toggle.

**Domain**: [bananabox.plus](https://bananabox.plus)

## Latest Update

Updated on 2026-03-19 (`v1.2`):
- Completed a security hardening pass across DM admin, visitor messaging, protected Things content, and public pages
- Replaced client-side hardcoded secrets with server-issued signed sessions in CloudBase functions
- Moved protected Things links out of tracked frontend files and into server-side configuration
- Added a self-hosted CloudBase visitor UV tracker in shadow mode while temporarily keeping the original third-party counter for comparison
- Localized `floating-clock` runtime dependencies into `Assets/vendor/` to remove external CDN script execution
- Expanded build/deploy output to include the full static site structure

## Run locally

```bash
npx serve .
# or
python3 -m http.server 8080
```

## Deploy

- **GitHub**: repo is [zijianxcode/personal-homepage](https://github.com/zijianxcode/personal-homepage). Push to `main` to update.
- **ai-builders.space**: Connect this GitHub repo in the ai-builders.space dashboard.
  - **Static**: set build output / root to repo root (serves `index.html` + `Assets/`).
  - **Docker**: use the included `Dockerfile`; it runs `server.py` and serves the site on `PORT` (default 8000).
- **CloudBase**: `npm run deploy` (requires `TCB_ENV_ID` in `.env`)

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
├── visual-coding.html          ← Visual Coding 子页面（4 列卡片网格）
├── projects/                   ← 独立实验作品
│   ├── floating-clock.html
│   └── kinetic-typography-clock.html
├── Assets/
│   ├── css/style.css           ← 全局样式 + CSS 变量
│   ├── js/
│   │   ├── script.js           ← Tab 切换、语言切换、粒子背景
│   │   ├── particle-title.js   ← 粒子标题动效
│   │   └── vc-page.js          ← Visual Coding 页面逻辑
│   ├── fonts/SixCaps-Regular.ttf
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
- **Motion**: 有目的的动画 — 引导注意力、提供反馈、建立空间关系
- **Language**: 中/英双语，通过 `data-lang` 属性切换，CSS 控制显隐

## Tech Conventions

- Vanilla HTML/CSS/JS — 不使用框架
- CSS 自定义属性作为 Design Token
- 移动优先响应式设计
- Canvas 用于粒子系统和生成式视觉
- 独立实验使用单 HTML 文件

## Naming

- 文件: `kebab-case`（如 `floating-clock.html`）
- CSS 类: 描述性命名，连字符分隔（如 `work-item--vc`）
- JS: `camelCase` 变量，`PascalCase` 类
- CSS 变量: `--` 前缀语义化命名（如 `--text-muted`, `--border`）
