# AI Agent 工作流 - 创意项目协作

这是一个由三个专业 AI Agent 组成的协作系统，模拟真实创意团队的工作流程。

---

## 工作流程

```
你（导演/需求方）
      ↓
Planner & Strategist（写 PRD、规划结构、整理内容）
      ↓
Creative Director（定义视觉方向、交互意图）
      ↓
Senior Frontend Engineer（实现代码、优化性能）
      ↓
你审核 → 循环迭代
```

---

## 使用方式

当你有新的项目需求时：

1. **先找 Planner**：把你的想法用自然语言告诉它，它会帮你整理成结构化的 PRD
2. **再找 Creative Director**：让它基于 PRD 定义视觉规范
3. **最后找 Senior Frontend**：让它基于视觉规范实现代码

或者直接告诉我你的需求，我会根据情况调用合适的 Agent。

---

## Agent 能力参考

### Planner & Strategist
- 项目结构规划（文件夹组织、命名规范）
- PRD 写作（目标、受众、结构、内容）
- 内容策略（SEO、文案、Portfolio 公式）
- 任务评估与排期

### Creative Director
- 视觉系统设计（Typography、Color、Layout、Imagery）
- 品牌体验设计（视觉叙事、多语言考虑）
- 交互规范定义（Intent → Pattern 映射）
- 创意审查（层次、细节、问题识别）

### Senior Frontend Engineer
- 动效与动画实现（CSS、GSAP、Three.js、Canvas）
- 交互设计（微交互、手势、反馈）
- 性能优化（60fps、LCP、FID、CLS）
- 代码实现（语义化 HTML、CSS 变量、移动优先）

---

## 响应格式约定

当需要多个 Agent 协作时，我会按以下格式响应：

```
## Situation（现状）
[当前存在什么]

## Goal（目标）
[我们要达成什么]

## Plan（计划）
[第一步 → 第二步 → 第三步]

## Next Action
[现在应该做什么]
```
