# AI Agent Workflow — 协作规则

## 角色定义

本项目使用三种 AI 角色协作，按需调用：

| 角色 | 核心职责 | 输出物 |
|------|---------|--------|
| **Planner** | "做什么？为什么？" | PRD、任务计划、内容大纲 |
| **Creative Director** | "看起来和感觉如何？" | 视觉规范、层级结构、交互意图 |
| **Senior Frontend** | "怎么做出来？" | 代码实现、动效规格、性能优化 |

---

## 工作流程

```
需求 → Planner 写 PRD → CD 定视觉 → Frontend 实现 → 审核迭代
```

简单任务可跳过前序步骤，直接由 Frontend 实现。

---

## PRD 模板（Planner 输出）

```markdown
# [项目名]

## Goal
一句话。做什么，为什么。

## Target
给谁用。什么设备。什么场景。

## Structure
页面模块顺序和层级。

## Design Direction
- Color: 具体 hex/HSL 值
- Typography: 字体、字号、字重
- Layout: 网格、间距、响应式行为

## Content
实际文案，按模块组织。不用 lorem ipsum。

## Interaction
滚动行为、hover 状态、过渡动画。具体时长和缓动。

## Constraints
- 单文件 / 多文件
- 性能目标
- 浏览器支持
```

**PRD 质量标准：** 别人看完能直接开工，不需要再问问题。

---

## 任务估时参考

| 任务类型 | 估时 |
|----------|------|
| 单页实验 (projects/) | 30min–2hr |
| 主页模块增改 | 1–3hr |
| 完整页面设计+代码 | 4–8hr |
| 多语言内容 | +50% |
| 响应式适配 | +30% |

---

## 响应格式

```
## Situation（现状）
## Goal（目标）
## Plan（步骤 + 估时）
## Next Action（现在做什么）
```

---

## Git 操作规则

- **不要自动推送** — 每次修改完成后，询问用户是否需要提交和推送到 GitHub
- 推送前确认改动内容，确保只包含用户要求的修改
- **本项目内容以 GitHub `main` 最新提交为准**
- **跨平台统一以 GitHub 为准** — 无论在 Cursor、Antigravity、OpenClaw、Claude Code、Codex 或其他平台修改本项目，完成后都应提交并推送到本仓库远端，保持 GitHub 为单一最新来源
- **每次新会话先对齐再开发** — 在任意平台开始处理本项目新指令前，先检查本地是否与 `origin/main` 一致（`git fetch` + `git status -sb`）；若本地落后远端，先提示并建议执行 `git pull --rebase origin main`，同步后再进行后续改动

---

## 新项目正式路径规则

- 以后新增站内项目时，正式访问路径统一使用主域名子路径：`https://bananabox.plus/<project-slug>/`
- 不把 `*.tcloudbaseapp.com`、`*.app.tcloudbase.com`、`vercel.app` 等临时或测试域名写成站内正式入口
- 新项目的可发布静态产物应落在仓库根目录同名文件夹，例如 `time-ink/`
- `build` / `deploy` 脚本必须包含该目录
- 项目详情页中的体验按钮默认链接到 `../<project-slug>/` 或 `/<project-slug>/`
- 发布后优先验证 `bananabox.plus/<project-slug>/` 是否生效，而不是只验证临时测试域名

## 新项目托管与首屏规则

- 新项目若挂到 `bananabox.plus/<project-slug>/`，必须在源码层支持对应子路径，不能只靠导出后手改产物
- 首屏标题、说明、主按钮、关键输入控件默认必须可见；动画只能增强，不得成为内容出现的唯一条件
- 发布前必须在正式子路径下检查关键资源是否全部 `200`，包括 CSS、JS、图片、SVG、字体、光标等
- 发布前必须用无痕/干净环境验证首屏，确认不是缓存掩盖了路径或动画问题
- 若使用 GitHub Pages 托管静态子路径，必须确认 `/_next/` 等目录不会被忽略，必要时保留 `.nojekyll`

---

## 关联规则

- 视觉系统 → `design-system.md`
- 编码标准 → `coding-standards.md`
