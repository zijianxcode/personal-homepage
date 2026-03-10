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

---

## 关联规则

- 视觉系统 → `design-system.md`
- 编码标准 → `coding-standards.md`
