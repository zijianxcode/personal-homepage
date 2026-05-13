# 咒术SCI高专

一个由本地 Markdown 资料自动生成的学术协作站点。

它的目标不是单纯把文件搬上网页，而是把论文追踪、成员进化、讨论沉淀、升级评审这些原本分散的记录，整理成一个可浏览、可搜索、可发布的知识入口。

线上地址：
- GitHub Pages: [zijianxcode.github.io/jujutsu-sci](https://zijianxcode.github.io/jujutsu-sci/)
- 主站镜像子页: [bananabox.plus/academy](https://bananabox.plus/academy/)

## 项目在做什么

这个仓库负责把源目录里的学术记录自动转成静态网站，包括：
- 首页总览
- 论文总结页
- 研究主题页
- 成员进化页
- 讨论 / 评审 / 归档页
- 高星论文聚合页

它本质上是一个“源内容驱动的静态站点生成器”：
- 源目录负责沉淀 Markdown 内容
- `sync_from_source.py` 负责识别、排序、归类和生成页面
- `site.css` / `site-index.js` / `site-detail.js` 负责阅读体验与交互

## 内容来源

推荐网页项目目录：
`/Users/zijian/Documents/Code/jujutsu-sci`

源内容目录：
`/Users/zijian/Library/Mobile Documents/com~apple~CloudDocs/SCI/2026sci1/学术小龙虾`

当源目录更新后，在项目目录运行：

```bash
python3 sync_from_source.py
```

执行后会自动刷新首页、归档页、主题页、成员页和高星论文页。

## 仓库规则

下面这些是当前项目维护时默认必须遵守的规则：

1. 源目录是真实内容源  
   站点内容以 `2026sci1/学术小龙虾` 里的 Markdown 为准，网页仓库负责生成与展示，不把网页产物当成人工编辑主源。
2. 页面按真实时间倒序  
   生成逻辑优先读取正文中的真实时间字段，再回退到目录时间；不要手动把页面顺序改成和源内容不一致。
3. 角色逻辑不能被打乱  
   当前协作链路默认是：悠仁调研、野蔷薇分析、惠写作整理、五条悟最终评审；如果扩展角色，要在这个闭环上继续长，不要破坏原有分工语义。
4. 高星论文必须来自角色打星记录  
   `starred.html` 不是手工清单，而是从各角色能力进化文档里自动抽取与聚合；后续新增规则时，也要优先走自动提取。
5. 同步要按完整链路理解  
   本地生成、`jujutsu-sci` 仓库更新、`academy` 镜像更新是三段链路；只更新其中一段，不代表全站已经同步。
6. GitHub 推送和生产发布要先确认  
   本地生成、检查、预览可以先做；但推到 GitHub、更新线上站点，默认都要先经过确认。
7. 遇到问题必须写文档  
   同步异常、排序错误、搜索 bug、部署偏差、镜像不一致等问题，修完后必须补到 [问题记录与修复日志](docs/ISSUE_LOG.md)，不能只留在聊天记录里。
8. `academy` 不是自动跟随主仓库  
   `bananabox.plus/academy` 是镜像子页，更新 `jujutsu-sci` 后如果需要同步到主站，还要更新 `personal-homepage` 里的 `academy/`。
9. Hermes 只写源 Markdown
   Hermes 采集结果进入 `records/YYYY/MM/DD/HH/<paper-key>/论文总结.md`，不直接修改 HTML、不提交、不发布。

如果只想记住一条，那就是：

`源内容 -> 本地生成 -> GitHub -> academy 镜像 -> 线上验证`

这条链路中任何一步没走完，都不算真正完成更新。

## Agent 角色分工

这个项目不是“单作者文档站”，而是一个多角色协作系统。当前在站点里已经稳定出现的核心 agent 角色包括：

| Agent | 角色定位 | 主要职责 | 在站点中的体现 |
| --- | --- | --- | --- |
| 悠仁 | 调研研究员 | 跟踪前沿论文、会议动态、方向信号 | 论文总结、日会分享、能力进化 |
| 野蔷薇 | 批判分析者 | 补充观点、发现盲点、提出反思与质疑 | 深度讨论、论文摘录、能力进化 |
| 惠 | 写作与方法论 | 提炼结构、组织表达、推进学术写作质量 | 写作建议、论文自评、能力进化 |
| 五条悟 | 最终评审者 | 做方向判断、质量把关、拍板取舍 | 评审会、最终意见、能力进化 |
| 全栈工程师 | 工程实现者 | 关注 AI 工具链、系统架构、工程落地 | 工程向论文打星、实现方案评估 |

站点中的成员页并不是静态介绍，而是从对应的 `XX-能力进化.md` 自动拉取内容生成，所以角色定义和角色更新是连在一起的。

## 更新与进化评审逻辑

这个项目的内容流不是一层，而是四层闭环：

### 1. 日更层：记录当天输入

对应文件：
- `日会记录.md`
- `论文总结.md`
- `XX-能力进化.md`

作用：
- 记录每个 agent 当天读了什么、想了什么、进步了什么
- 让“论文输入”和“个人进化”同时被留下

### 2. 角色层：沉淀各自能力增长

对应文件：
- `悠仁-能力进化.md`
- `野蔷薇-能力进化.md`
- `惠-能力进化.md`
- `五条悟-能力进化.md`
- `全栈工程师-能力进化.md`

作用：
- 不只是记工作内容，而是记录角色能力如何变化
- 把调研能力、批判能力、写作能力、评审能力、工程能力拆开积累

### 3. 协作层：把分散输入汇总成讨论

对应文件：
- `团队讨论.md`
- `深度讨论.md`
- `周会讨论.md`

作用：
- 把各角色当日或阶段性的输入拉到一起
- 形成团队视角下的判断、分歧和方向共识

### 4. 评审层：把讨论转成升级与动作

对应文件：
- `升级迭代.md`

这类文档在内容上通常遵循固定顺序：
1. 悠仁先给出调研新发现
2. 野蔷薇补充分析与挑战
3. 惠整理写作与方法建议
4. 五条悟做最终评审与优先级拍板

这也是当前项目最重要的“进化评审逻辑”：
- 先输入
- 再分析
- 再写作整理
- 最后做评审把关

它让这个站点不只是“学术资料归档”，而是一个有角色分工、有阶段推进、有最终决策的协作系统。

## 高星论文逻辑

站点里的 [高星论文](starred.html) 不是手工整理，而是自动从各角色能力进化文档中抽取出来的。

当前逻辑是：
- 从成员进化文档里解析论文标题、评分、角色、时间
- 汇总成统一列表
- 按综合星级和打星角色数排序

这意味着：
- 一篇论文不仅有“是否读过”
- 还有“谁认为它重要”
- 以及“它为什么值得继续追”

这部分是站点里连接“个人判断”和“团队知识优先级”的关键层。

## 仓库结构

核心文件：
- `sync_from_source.py`：整站内容同步与生成入口
- `organize_source.py`：源内容目录整理工具，负责把散乱时间目录归档到 `records/YYYY/MM/DD/slot/`
- `site.css`：共享样式
- `site-index.js`：首页交互
- `site-detail.js`：详情页交互
- `index.html`：首页产物

文档入口：
- [文档导航](docs/README.md)
- [项目结构](docs/PROJECT_STRUCTURE.md)
- [内容同步说明](docs/CONTENT_SYNC.md)
- [Hermes 采集迁移说明](docs/HERMES_MIGRATION.md)
- [内容采集规则](docs/COLLECTION_POLICY.md)
- [部署发布说明](docs/DEPLOYMENT.md)
- [版本历史](docs/VERSION_HISTORY.md)
- [发包归档](releases/README.md)
- [问题记录与修复日志](docs/ISSUE_LOG.md)

如果你是第一次接手，建议先看：
1. [文档导航](docs/README.md)
2. [项目结构](docs/PROJECT_STRUCTURE.md)
3. [内容同步说明](docs/CONTENT_SYNC.md)
4. [部署发布说明](docs/DEPLOYMENT.md)

## 同步与发布规则

涉及站点更新时，默认按三段链路理解：

1. 本地生成  
   在本仓库运行 `python3 sync_from_source.py`
2. GitHub 同步  
   推送到 [zijianxcode/jujutsu-sci](https://github.com/zijianxcode/jujutsu-sci)
3. `academy` 镜像同步  
   如果 [bananabox.plus/academy](https://bananabox.plus/academy/) 也要更新，必须同步 `personal-homepage` 仓库里的 `academy/`

重要说明：
- `jujutsu-sci` 更新，不等于 `academy` 自动更新
- 本地生成和检查可以先做
- `GitHub 推送` 与生产发布必须经过确认后再执行

## 源目录整理规则

源目录统一保持为：

```text
学术小龙虾/
├── records/YYYY/MM/DD/slot/
├── records/YYYY/MM/DD/slot/<paper-key>/论文总结.md
├── attachments/
├── inbox/
└── legacy-html/
```

`records/` 才是正式同步入口；`attachments/`、`inbox/`、`legacy-html/` 默认不参与页面生成。

如果源目录又出现新的顶层日期目录，先运行：

```bash
python3 organize_source.py
```

确认预览无冲突后，再运行：

```bash
python3 organize_source.py --apply
python3 sync_from_source.py
```

## 问题记录机制

从现在开始，和这个项目有关的异常都统一记录到：
- [问题记录与修复日志](docs/ISSUE_LOG.md)

至少要写清楚：
- 问题现象
- 影响范围
- 根因判断
- 修复动作
- 预防措施
- 验证结果

这条规则的目的很简单：
不要让项目经验只留在聊天记录里。

## 当前状态

这个仓库已经具备：
- 本地源驱动同步能力
- 静态站点生成能力
- GitHub 仓库发布能力
- GitHub Pages 展示能力
- 主站 `academy` 子页镜像能力

下一步继续扩展时，优先保持两件事：
- 角色逻辑清楚
- 内容链路闭环清楚
