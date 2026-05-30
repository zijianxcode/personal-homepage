# 静态站发布治理案例：v1.6 升级中的设计思维与工程思维

> 项目：bananabox.plus（personal-homepage + academy）  
> 时间：2026-05-30  
> 性质：从「能跑」到「可治理」的发布链路升级；含一次生产事故与修复  
> 读者：后续做类似多仓库、多入口、Agent 定时发布时的自己或协作者

---

## 背景：这到底在优化什么

表面上是：CloudBase 迁移、DNS 切换、应急备用、验收脚本。

本质上是对一个**复杂静态站**做治理：

- 3 个 Git 仓库（source → 生成 → 主站镜像）
- 2 个历史发布面（GitHub Pages + CloudBase）
- 2 套本地路径（Code + 已废弃的 iCloud）
- 1 条 Hermes 定时同步链路
- 2 种页面类型（个人主页 `/` vs 学术站 `/academy/`）

升级目标不是「功能更多」，而是：**权威来源唯一、日常命令唯一、结构默认不变、失败可定位**。

---

## 案例 1：先画边界，再谈优化

### 场景

三仓库分工（`jujutsu-sci-source` → `jujutsu-sci` → `personal-homepage/academy/` → CloudBase）本身合理。真正的问题是：

- 双发布面（GitHub Pages 与 CloudBase 同时像「生产」）
- 双本地路径（Code 与 iCloud 脚本并存）
- 分段 cron（sync 与 deploy 拆开，中间状态不可控）

### 设计思维

复杂项目的第一刀通常是**收敛**，不是加功能：

1. 生产面有几个？
2. 日常命令有几条？
3. 失败时听谁的？

### 工程做法

- 明确 **CloudBase + 自定义域名** 为唯一生产面
- GitHub 降级为 **代码备份 + 异构冷备**，不再绑主域名
- iCloud 脚本标记 **DEPRECATED + exit 1**，不是「暂时不用」
- 日常发布收成一条命令：`./auto_sync_site.sh sync`

### 可讲 takeaway

> 优化前先画边界；冗余流程不是备份，是债务。

---

## 案例 2：发布链路 = 产品功能

### 场景

原先：生成 HTML → push → 可能手动 `tcb deploy` → 可能忘记验收。人和 Agent 各有一套「大概知道怎么做」。

### 设计思维

发布链路和 UI 一样，需要**状态机**：

- 每步输入/输出清晰
- 失败码可枚举（0–5）
- 重试策略写死在脚本里，不靠记忆

### 工程做法

`auto_sync_site.sh` 固定顺序：

```text
生成 → push jujutsu-sci → rsync academy → push personal-homepage
→ npm run deploy（整站）→ verify:production → health + 应急状态
```

Hermes 定时任务 prompt 与脚本对齐，作为 **可执行 runbook**（人和 Agent 共用）。

### 可讲 takeaway

> 把隐性知识写进脚本和自动化 prompt，而不是只写在 README 里。

---

## 案例 3：「备用电源」——分层降级

### 场景

主站挂了怎么办？需要类似 UPS 的应急机制，但不能把个人小站做成企业级 DNS  failover。

### 设计思维

应急要分清两类问题：

| 类型 | 典型原因 | 有效 fallback |
|------|----------|---------------|
| 同基础设施 | DNS、证书、自定义域名 | CloudBase 直连 URL |
| 异构基础设施 | CloudBase 整体不可用 | GitHub Pages 冷备 |

自动 DNS 切换对个人站：**生效慢、维护成本高、误切换风险大**。更稳的是 **文档化 URL + 健康探测 + 人工切换**。

### 工程做法

三层入口：

1. `https://bananabox.plus/`（生产）
2. `https://*.tcloudbaseapp.com/`（同云、绕域名）
3. `https://zijianxcode.github.io/personal-homepage/`（异构冷备）

应急说明页 `/emergency/` + `health:production` 探测 + `status.json`。

**关键细节**：GitHub Pages ** deliberately 不绑** `bananabox.plus`，否则冷备与主站共命运。

### 可讲 takeaway

> 备份要异构；同构双写不是冗余，是重复劳动。

---

## 案例 4：结构不变量——写成契约

### 场景

个人主页在 `/`，研究所在 `/academy/`。这是产品语义，不是部署细节——但脚本和 AI 不知道，就可能把 academy 部署到根路径。

### 设计思维

**隐性不变量**最危险：人「都知道」，系统不知道。

对用户承诺「除非你明确要求，结构不变」，必须落到：

1. 文档（`SITE-STRUCTURE.md`）
2. 本地规则（`.cursor/rules`）
3. 脚本验收（deploy bundle + 线上 verify）
4. 自动化 prompt（Hermes）

### 工程做法

| 路径 | 页面 | 验收标题 |
|------|------|----------|
| `/` | 个人主页 | `aspera ad astra` |
| `/academy/` | 学术研究所 | `研究所` |

硬性禁止：

- `tcb hosting deploy academy/` 到根路径
- 将 academy HTML 复制到 repo 根目录

### 可讲 takeaway

> 领域建模不只属于后端；静态站的 URL 层级也是模型，要当契约守。

---

## 案例 5：验收四层模型（含事故教训）

### 场景（事故）

线上 `bananabox.plus/` 显示「研究所」，本地和 GitHub 都是对的。根因：

1. 历史 partial deploy 把 academy 内容留在 CloudBase 根路径
2. `verify:production` **只验 `/academy/`**，不验 `/`
3. `npm run deploy` 因缺少 `CNAME` 构建失败，整站长期未更新

### 设计思维

- **测试盲区在最「显然」的路径**（首页、根路由）
- **CLI 成功 ≠ 线上正确**
- 构建脚本的脆性（硬依赖可选文件）也是架构债

### 工程做法：四层验收

```bash
npm run test:site-integrity          # 1. 仓库结构
node scripts/verify-deploy-bundle.js # 2. 部署包（上传前）
npm run verify:production            # 3. 线上内容（上传后）
npm run health:production            # 4. 多入口 + 冷备
```

语义标记示例：根路径 title 必须是 `aspera ad astra`，不能是「研究所」。

构建修复：可选文件（CNAME、`.nojekyll`）缺失时不阻断 deploy。

### 可讲 takeaway

> 发布成功 = 结构对 + 包对 + 线上对 + 入口可达；少一层都可能「本地全对、线上全错」。

---

## 案例 6：迁移 vs 治理

### 场景

DNS 从 GitHub Pages A 记录切到 CloudBase CNAME；全球 DNS 缓存曾同时返回旧 A 与新 CNAME。

### 设计思维

拆两阶段：

- **Cutover（一次性）**：DNS、域名绑定、GitHub 降冷备
- **Steady-state（日常）**：单命令 sync + 四层验收

迁移文档要及时「去时效化」（「DNS 待改」→「已完成」），否则下一任按过期 runbook 操作。

### 可讲 takeaway

> 迁移文档有保质期；steady-state 文档才是长期资产。

---

## 案例 7：删冗余流程，而不是加监控兜坑

### 场景

Hermes 曾单独跑 `tcb hosting deploy academy/`，与整站 deploy 重复，且极易破坏根路径结构。

### 设计思维

| 做法 | 性质 |
|------|------|
| 整站 `npm run deploy` | 正确发布 |
| 只 deploy academy 到 `.` | footgun |
| 两套 deploy + 一套监控 | 债务叠加 |

优化方向：**删错误路径**，不是「错了再告警」。

### 可讲 takeaway

> 复杂项目的优化，常常是减步骤，不是加护栏。

---

## 案例 8：事故复盘要产出机制

### 时间线（摘要）

1. v1.6 上线：CloudBase 迁移、应急机制、验收脚本
2. 用户发现：根路径变成 academy，个人主页「没了」
3. 热修复：整站重部署 + 根路径验收
4. v1.6.1：结构锁定 + deploy bundle 验收 + Hermes 更新

### 好复盘的标准

同样错误再发生时，**脚本在分钟级拦住**，而不是「下次人工注意」。

### 可讲 takeaway

> Postmortem 的产出是机制和测试，不是道歉和记忆。

---

## 若做成分享：建议课时结构

| 课时 | 标题 | 核心一句话 |
|------|------|------------|
| 1 | 复杂项目的收敛 | 单一生产面、单命令、单路径 |
| 2 | 分层应急设计 | 同云 fallback + 异构 cold standby |
| 3 | 结构不变量 | 文档 + 脚本 + 自动化三写一 |
| 4 | 验收四层模型 | 仓库 → 包 → 线上 → 多入口 |
| 5 | 一次真实事故 | 盲区、构建脆性、机制化修复 |

**开场金句（可选）**：

> 这次升级的本质，不是「上了 CloudBase」，而是把多仓库、多入口、还带 Agent 定时执行的静态站，治理成有权威来源、有结构契约、有分层降级、有失败语义的小系统——这和做产品架构是同一套思维。

---

## 本项目相关文档索引

| 文档 | 用途 |
|------|------|
| [SITE-STRUCTURE.md](../SITE-STRUCTURE.md) | 结构不变量（日常约束） |
| [DEPLOYMENT-STABLE.md](../DEPLOYMENT-STABLE.md) | 稳定发布 runbook |
| [EMERGENCY-ACCESS.md](../EMERGENCY-ACCESS.md) | 应急入口说明 |
| [CHANGELOG.md](../../CHANGELOG.md) | 版本变更记录 |

---

## 修订记录

| 日期 | 说明 |
|------|------|
| 2026-05-30 | 初稿，基于 v1.6 / v1.6.1 升级与主页覆盖事故整理 |
