# Coding Standards — 前端工程规范

本项目的编码、动画和性能标准。所有代码改动必须遵循以下规范。

---

## Tech Stack

- **Vanilla HTML/CSS/JS** — 不使用 React/Vue 等框架
- Three.js / WebGL — 3D 场景
- Canvas 2D — 粒子系统、生成式艺术
- GSAP (GreenSock) — 复杂时间线动画（按需引入）
- 只有在能节省 100+ 行代码或处理你会写错的边界情况时，才引入库

---

## HTML

- 语义优先：`<section>`, `<article>`, `<nav>`, `<main>`
- 无障碍性不是可选的
- 独立实验使用单 HTML 文件（`projects/` 目录下）
- 多语言内容使用 `data-lang` + CSS 显隐控制，不用 JS 条件渲染

---

## CSS

- 使用 CSS 自定义属性作为 Design Token（`--bg`, `--text`, `--border` 等）
- 移动优先 `@media` 查询
- 不要有魔法数字 — 每个值要能在变量系统中找到来源
- 禁止无理由的 `!important`
- 使用 `contain: layout style paint` 隔离独立组件
- 使用 `content-visibility: auto` 处理屏幕外内容

---

## JavaScript

- `camelCase` 变量，`PascalCase` 类
- 视觉更新使用 `requestAnimationFrame`，不用 `setTimeout`
- 组件销毁时移除事件监听器
- 取消不需要的 animation frame
- Three.js 的 geometry、material、texture 必须显式 dispose

---

## Motion & Animation

动效是**沟通层**，不是装饰。每个动画必须有目的。

### 时长规范

| 类型 | 时长 | 说明 |
|------|------|------|
| 微交互 | 150–300ms | 按钮状态、开关 |
| 页面过渡 | 300–500ms | Tab 切换、页面转场 |
| 复杂序列 | 最长 800ms | 多元素编排 |
| 列表交错 | 30–60ms/项 | 列表项依次出现 |

### 缓动曲线

- **默认**: `cubic-bezier(0.16, 1, 0.3, 1)` — 适用于大多数 UI 动效
- **弹性**: `cubic-bezier(0.34, 1.56, 0.64, 1)` — 字符回弹（项目已用于 `.char-unit`）
- **禁止** `linear` — 永远不要用

### 动效描述标准

写动效规格时必须包含全部 6 要素：

```
1. 触发条件（hover / click / scroll / viewport entry）
2. 视觉响应（什么变了、怎么变的）
3. 时长和缓动
4. 移动端等价方案（touch vs hover）
5. prefers-reduced-motion 降级
6. 边界情况（快速连击、动画中断、resize 中的动画）
```

### 必须遵守

- **永远尊重 `prefers-reduced-motion`**
- 只动画 `transform` 和 `opacity`（合成层属性）
- `will-change` 谨慎使用，只在动画开始前添加
- 避免布局抖动：批量 DOM 读取后再写入

---

## Performance Targets

| 指标 | 目标 | 工具 |
|------|------|------|
| LCP | < 2.5s | Lighthouse |
| FID/INP | < 200ms | Web Vitals |
| CLS | < 0.1 | Lighthouse |
| TTI | < 3.5s | Lighthouse |
| Bundle | < 200KB gzipped | Bundle analyzer |
| 动画帧率 | ≥ 60fps | Chrome DevTools Performance |

### 加载性能

- 关键 CSS 内联到 `<head>`，其余异步加载
- 图片: WebP/AVIF + `<picture>` 降级，`loading="lazy"`，显式 `width`/`height`
- 字体: `font-display: swap`，预加载关键字重，子集化未用字形
- JS: 非关键脚本 `defer`，路由级代码拆分
- Hover/视口靠近时预加载可能的下一页

### 每个功能的自检清单

1. 会不会导致布局偏移？
2. 首屏是否加载了不必要的资源？
3. 反复挂载/卸载是否会内存泄漏？
4. 在低性能设备上是否优雅降级？
5. 没有 JavaScript 时是否仍可用？（渐进增强）

---

## External Services

| 功能 | 方案 | 说明 |
|------|------|------|
| 访客计数 | [不蒜子 (busuanzi)](http://busuanzi.ibruce.info/) | 零配置，`<script>` + `<span id="busuanzi_value_site_uv">` 即可。不要用 Supabase 等自建方案。 |

---

## Deploy Quality Gates

发布前必须通过的检查清单：

1. [ ] 内容校对（中/英双语）
2. [ ] 移动端响应式检查（375px, 768px, 1440px）
3. [ ] Lighthouse 性能审计 ≥ 90
4. [ ] OG 图片 + meta 标签已验证
5. [ ] 所有链接已测试（无 404）
6. [ ] Favicon 存在
7. [ ] `prefers-reduced-motion` 已处理
