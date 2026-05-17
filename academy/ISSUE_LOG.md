# 问题记录与修复日志

## 2026-05-03：auto_sync_site.sh push 超时静默失败，cron 报 ok 但 GitHub 未更新

### 问题现象

- 5/3 下午 15:40 jujutsu-sci 仓库成功 commit `922adf0`（cron jobs 触发）
- 16:01 personal-homepage academy mirror 成功推送 commit `114a5f6`
- 16:03 cron ⑤同步推送执行，cron 显示 "ok"
- 但 jujutsu-sci 和 personal-homepage 均无 16:03 的新 commit
- 线上 CloudBase 主页缺 15:40 之后采集的最新内容（悠仁/野蔷薇/惠/五条悟采集）

### 根因判断

**根本原因：push 超时时静默失败，cron job 的 "ok" 状态不等于内容真正到达 remote。**

两层问题叠加：

1. **git push 超时但脚本正常退出**
   `retry_command 3 git push` 超过单次操作级别 timeout 时会一直等待，网络抖动后 git 命令hang住，3次×3秒重试共约 27 秒。但 cron job 显示 "ok"（进程正常退出），未区分"内容真正同步"和"操作失败但退出码非零"。

2. **`commit_if_needed` 返回 false 时静默 exit 0**
   push 失败后走 `else` 分支打印 "No staged changes after sync" 并 exit 0，cron 认为任务成功完成。

3. **academy mirror clone 用普通 git clone 无 timeout**
   网络慢时 clone 也会挂住，直到超时才返回，但不会阻止后续步骤。

### 修复动作（commit `acfb0f0`）

1. **各步骤加 per-command timeout**
   - `with_timeout()`: git fetch/clone 等通用操作上限 60s
   - `with_push_timeout()`: push 操作上限 90s
   - 永远不会再hang死

2. **`verify_remote_has_commit()` — push 后验证 remote**
   每次 push 后 fetch remote 的 HEAD 比对 SHA，不合就走 retry 循环。push 返回成功不意味着 remote 真的收到了。

3. **retry 循环在 push 失败时不立刻退出**
   先 push+verify，失败后等 5 秒重试最多 3 轮，给网络恢复空间。

4. **exit code 语义化**
   - `0` = jujutsu-sci push 到 remote + academy mirror 均成功
   - `1` = sync_from_source.py 生成失败
   - `2` = jujutsu-sci push 三轮都没到 remote
   - `3` = academy mirror push 失败

5. **`commit_if_needed` 区分两种情况**
   `return 1` = 没什么要提交的（正常），`exit 2` = git 操作报错（异常）。不再把"没内容"和"操作失败"混为 exit 0。

6. **academy mirror clone 改用 bare repo + GIT_WORK_TREE 模式**
   避免普通 clone 产生 working tree 冲突，clone 带 timeout 保护。

### 验证方法

```bash
# 正常同步（check 模式先验语法）
./auto_sync_site.sh check

# 观察日志关键字
# - "pushed and verified" = push 成功且 remote 有 commit
# - "push attempt N timed out" = 某次 push 超时但会重试
# - "academy: pushed and verified" = mirror 同步成功
# - "FAILURE: jujutsu-sci push did not reach remote" = 三轮都失败，exit 2
```

### 预防措施

- **永远不要依赖 cron job 的 "ok" 状态判断内容真正上线**——必须验证 GitHub remote commit 存在
- **每次 push 后必须验证 remote**，不能只看本地 exit code
- **exit code 必须语义化**，让调用方（cron/告警系统）能区分"没事情做"和"事情做失败了"
- 后续考虑在 cron job 失败时接入 Telegram 告警，不只是静默记录 ok

---

## 2026-05-01：Cron Job 采集静默失败 —— streaming 响应被 inactivity timeout 误杀

### 问题现象

- 4/29、4/30 连续两天，野蔷薇（13:30）和惠（14:00）显示"已采集"（last_status=ok），但实际上目录内容不完整或为空
- 日志中大量 `TimeoutError: Cron job 'Agent3-晚间补充' idle for 1065s (limit 600s) — last_activity: receiving stream response`
- 采集员在等待 provider 返回 streaming 响应时被 scheduler 判定为"空闲"并杀死

### 根因判断

**根本原因是 cron scheduler 的 inactivity timeout 逻辑存在缺陷。**

Scheduler 依赖 `agent.get_activity_summary()` 的 `seconds_since_activity` 来判断 agent 是否还活着。但这个值在 streaming 期间会持续累加——因为没有新的 activity delta 到达，计时器一直在走。

关键日志证据：
```
Job 'Agent3-晚间补充' idle for 1065s (limit 600s) | last_activity=receiving stream response | iteration=24/60
Job 'Agent3-早间收集' idle for 3642s (limit 600s) | last_activity=waiting for provider response (streaming) | iteration=1/60
```

Agent 在第 1-24 轮迭代中都活着（说明不是真的 hang），但 scheduler 在 600s 无活动后将正在 streaming 的 agent 杀掉了。

另一层因素：Gateway Telegram 连接在 4/29-4/30 期间频繁断开，导致 cron 调度出现延迟和阻塞，放大了 streaming 超时的问题。

### 修复动作

1. **修改 `scheduler.py` inactivity 检测逻辑**（文件：`~/.hermes/hermes-agent/cron/scheduler.py`）
   - 在判断 inactivity 超时前，先检查 `last_activity_desc` 是否包含 "stream" 或 "receiving"
   - 如果正在 streaming，跳过 inactivity 检查——agent 是活着的，只是 provider 还没发完数据

```python
# 修改前
if _idle_secs >= _cron_inactivity_limit:
    _inactivity_timeout = True
    break

# 修改后
_is_streaming = "stream" in _last_desc.lower() or "receiving" in _last_desc.lower()
if not _is_streaming and _idle_secs >= _cron_inactivity_limit:
    _inactivity_timeout = True
    break
```

2. **`.env` 中已设置 `HERMES_CRON_TIMEOUT=1800`**
   - 将总超时从默认 600s 提升到 1800s（30分钟），应对学术搜索耗时

3. **Gateway 重启加载新配置**

### 预防措施

- Cron job 的 "ok" 状态不等于内容真正产出——必须验证输出目录存在且 `.md` 文件数量 ≥ 2
- Streaming 期间的"无活动"和"真正卡死"从 scheduler 角度看是一样的，必须通过 `last_activity_desc` 来区分
- 后续如遇 job 持续超时，优先检查 `last_activity` 字段：如果是 "receiving stream response"，说明是 provider 端慢，不是 agent 端卡死

## 2026-04-28：10 分制评分没有进入首页排行榜，CloudBase 可能只同步 HTML 导致样式旧

### 问题现象

- 新采集规则已经切换为 `10 分制`，例如 `综合评分：8/10`、`评分8.5/10`。
- 首页排行榜仍显示 `待五条老师评定 · 未评分`，或者旧版 `4.5/5`。
- 用户已经在 `五条悟-汇总.md` 中完成评分，但对应论文卡片没有显示分数。
- CloudBase/`academy` 发布时，如果只同步 HTML，线上可能出现内容变了但首页 UI、布局和样式仍是旧版。

### 根因判断

这次问题有两层：

1. 评分读取逻辑过窄  
   旧逻辑只读取同一研究包目录里的 `五条悟-能力进化.md`，没有读取 `五条悟-汇总.md`。  
   例如 `records/20260428/09/yujin-7218/论文总结.md` 有 `综合评分：8/10`，同日 `five-daily-summary/五条悟-汇总.md` 又写了 `悠仁（yujin-7218）...评分8.5/10`，但旧首页无法把汇总评分映射回 `yujin-7218`。
2. 分数展示仍按 5 分制思考  
   即使解析到历史 `4.5/5`，首页也会继续展示 `/5`，与新采集规则的 `/10` 不一致。排序需要保留内部归一分，但用户界面应该统一展示 10 分制。

### 修复动作

1. `sync_from_source.py` 新增 `parse_score_info()`，兼容：
   - `8.5/10`
   - `4.5/5`
   - 星级符号
   - `综合评分`、`评分`、`悟评` 等关键词
2. 首页排行榜显示统一转换为 `/10`。历史 `/5` 数据只作为兼容输入，不再作为首页展示标准。
3. 新增 `extract_gojo_summary_ratings()`，解析 `五条悟-汇总.md` 中类似 `### 悠仁（yujin-7218）` 的段落，并把 `评分8.5/10` 回填到对应研究包。
4. 排行榜评分优先级调整为：
   - 同目录 `五条悟-能力进化.md`
   - `五条悟-汇总.md` 中映射到研究包 key 的评分
   - `论文总结.md` 的综合评分
   - 其他成员短评评分
5. 补充回归测试，覆盖 `五条悟-汇总.md` 给 `yujin-7218` 打 `8.5/10` 后首页显示 `五条老师评定 8.5/10`。
6. 发布 `personal-homepage/academy/` 时同步 HTML 之外，也同步 `site.css`、`site-detail.js`、`site-index.js` 和必要图片，避免 CloudBase 线上样式滞后。

### 验证结果

- `python3 sync_from_source.py` 成功生成 `549` 条记录。
- `python3 -m unittest tests/test_sync_from_source.py` 通过。
- 本地 `index.html`、`personal-homepage/academy/index.html` 和 CloudBase 线上页面均包含：
  - `五条老师评定 9/10`
  - `五条老师评定 8.5/10`
- CloudBase 部署成功，上传 `90` 个文件。

### 预防措施

- 新采集产物默认使用 10 分制；旧 5 分制只做兼容读取，不作为新展示标准。
- 如果五条老师在每日汇总里打分，标题中必须保留研究包 key，例如 `悠仁（yujin-7218）`，否则无法稳定回填到具体论文。
- 首页排行榜不能只检查同目录角色短评；以后新增评分来源时，要同步更新评分优先级和测试。
- CloudBase/`academy` 发布不能只复制 `*.html`。凡是 UI、样式、交互变化，至少要同步：
  - `*.html`
  - `site.css`
  - `site-detail.js`
  - `site-index.js`
  - 相关图片资源
- 推 GitHub 不等于 `bananabox.plus/academy/` 已更新；必须再同步 `personal-homepage/academy/` 并部署 CloudBase。

## 2026-04-27：Hermes 采集需要一篇一档，并且仓库要脱离 iCloud Git 元数据

### 问题现象

- 旧 OpenClaw 定时任务曾在 iCloud 项目路径中运行 Git 操作。
- 自动化记录显示失败点为 `.git/worktrees/.../FETCH_HEAD: Operation not permitted`。
- 信息采集产物存在重复：同一篇论文可能同时出现在完整论文总结、角色长文、团队讨论和升级迭代中。

### 根因判断

Git 仓库和 `.git/worktrees` 放在 iCloud Drive 中，容易和 iCloud 同步、权限与文件占用机制冲突。

内容层面的问题则来自采集契约不够窄：角色输出承担了完整摘要、评分、讨论和行动建议多种职责，导致网页同步时难以区分“事实源”和“判断源”。

### 修复动作

1. 将推荐仓库位置调整为 `/Users/zijian/Documents/Code/jujutsu-sci`。
2. `sync_from_source.py` 支持 `config.local.json` 覆盖本机路径，并把默认 `project_root` 设为脚本所在仓库。
3. 明确支持 Hermes 深层记录目录：
   - `records/YYYY/MM/DD/HH/<paper-key>/论文总结.md`
   - 同目录可选 `<角色>-能力进化.md`
4. 新增 [Hermes 采集迁移说明](HERMES_MIGRATION.md) 与 [内容采集规则](COLLECTION_POLICY.md)。
5. 增加回归测试，验证 Hermes 深层论文目录能生成论文页、归档页、成员页，并且 `*-论文总结.md` 不作为 canonical 论文总结计数。

### 预防措施

- Hermes 只写源 Markdown，不直接修改网页产物。
- 每篇论文只允许一个 canonical `论文总结.md`。
- 角色短评只写评分、批判、关联和下一步动作，不重复完整摘要。
- 定时检查默认只运行 `./auto_sync_site.sh check`，不自动提交和发布。

## 2026-04-27：源目录过于扁平且命名不一致，导致同步容易漏扫或误判

### 问题现象

- 源目录 `2026sci1/学术小龙虾` 根部堆积大量 `YYYY-MM-DD` / `YYYY-MM-DD-HH` 时间目录。
- 目录中还混有旧版 `html/` 产物、顶层附件和顶层 Markdown。
- 带中文后缀的目录，例如 `2026-03-22-反思`、`2026-04-19-团队反思`，旧同步逻辑没有稳定纳入正式记录。
- 用户怀疑文件结构复杂是同步不顺畅的原因。

### 根因判断

旧同步脚本主要按“根目录下直接放时间目录”的结构工作，只稳定识别：
- `YYYY-MM-DD`
- `YYYY-MM-DD-HH`

当源目录继续增长后，这种扁平结构会带来三个问题：
- 根目录过长，人工核查困难。
- 带中文后缀的有效记录容易被漏掉。
- 旧产物和散落文件混在根部，容易干扰“哪些内容应该进入网站”的判断。

### 修复动作

1. 新增 [organize_source.py](/Users/zijian/Library/Mobile%20Documents/com~apple~CloudDocs/SCI/%E5%AD%A6%E6%9C%AF%E5%B0%8F%E9%BE%99%E8%99%BE-web/organize_source.py)，用于整理源目录。
2. 将源目录整理为：
   - `records/YYYY/MM/DD/HH/`
   - `records/YYYY/MM/DD/daily/`
   - `records/YYYY/MM/DD/中文后缀/`
   - `attachments/`
   - `inbox/`
   - `legacy-html/`
3. 修改 [sync_from_source.py](/Users/zijian/Library/Mobile%20Documents/com~apple~CloudDocs/SCI/%E5%AD%A6%E6%9C%AF%E5%B0%8F%E9%BE%99%E8%99%BE-web/sync_from_source.py)，让它同时兼容旧结构和新 `records/` 结构。
4. 将 `html/`、`legacy-html/`、`attachments/`、`inbox/` 加入忽略名单，避免非正式记录误入页面。
5. 更新 [内容同步说明](CONTENT_SYNC.md)，把源目录整理和排查步骤写入文档。

### 验证结果

- 整理前 dry-run 检出 `2026-03-26` 与 `2026-03-26-00` 等默认槽位冲突，已改为把无小时目录归入 `daily/`，避免覆盖。
- 正式整理后，源目录根部只剩：
  - `records/`
  - `attachments/`
  - `inbox/`
  - `legacy-html/`
  - `.DS_Store`
- 再次运行 `python3 organize_source.py` 显示 `Planned moves: 0`。
- 运行 `python3 sync_from_source.py` 成功生成 `525` 条记录。

### 预防措施

- 以后新增内容优先进入 `records/YYYY/MM/DD/slot/`。
- 如果源目录根部再次出现大量时间目录，先运行 `python3 organize_source.py` 预览，再确认是否 `--apply`。
- 整理脚本必须先 dry-run，发现冲突时停止，不能覆盖已有目录。
- 同步脚本只读取正式记录目录，附件、收件箱和旧 HTML 归档默认不进站点。

## 2026-03-25：每日自动同步任务存在，但没有自动把最新内容发布上线

### 问题现象

- 用户已经要求配置“每天同步一次”
- 但 2026-03-25 核查时，线上内容并没有按预期自动更新
- 用户误以为自动化没有创建，或者根本没有执行

### 根因判断

这次问题主要有三层：

1. 自动化确实存在，但最近运行失败  
   [daily-sci-sync automation](/Users/zijian/.codex/automations/daily-sci-sync/automation.toml) 仍是 `ACTIVE`，而且最近一次运行记录写在 [memory.md](/Users/zijian/.codex/automations/daily-sci-sync/memory.md) 中。  
   失败点是 `git pull --ff-only origin main`，错误为 `Could not resolve host: github.com`。
2. 老脚本把 `git pull` 作为硬前置步骤  
   旧版 [auto_sync_site.sh](/Users/zijian/Library/Mobile%20Documents/com~apple~CloudDocs/SCI/%E5%AD%A6%E6%9C%AF%E5%B0%8F%E9%BE%99%E8%99%BE-web/auto_sync_site.sh) 里，只要 GitHub 网络解析失败，脚本就会立即退出，导致后面的 `python3 sync_from_source.py` 根本不会执行。
3. 老脚本会自动提交推送，和“发布必须先确认”的规则冲突  
   用户后续又明确要求：GitHub 推送和生产发布必须先经过确认。  
   这意味着“每天自动发布”本身不应再是默认行为，自动化应该改成“每天自动检查并汇报”。

### 修复动作

1. 将 [auto_sync_site.sh](/Users/zijian/Library/Mobile%20Documents/com~apple~CloudDocs/SCI/%E5%AD%A6%E6%9C%AF%E5%B0%8F%E9%BE%99%E8%99%BE-web/auto_sync_site.sh) 改为：
   - 默认 `sync` 模式
   - 即使 GitHub 暂时不可达，也继续执行本地源目录生成
   - 自动检测是否只有数据页 HTML 发生变化
   - 只自动提交并推送 HTML 数据页更新
   - 自动同步 `personal-homepage/academy/` 镜像
   - 如果检测到非 HTML 改动，则停止并汇报，不自动上线
2. 将 `daily-sci-sync` 自动化提示词改为：
   - 每天拉取可拉取的远端状态
   - 本地重新生成
   - 自动发布数据页 HTML 更新
   - 一旦碰到非 HTML 变更或发布失败，立即停止并汇报
3. 将本次故障与修复逻辑补记到问题日志，避免后续再次误判

### 预防措施

- 以后把“自动同步”理解为“自动发布数据页”，不是“自动发布所有前端改动”
- 即使 GitHub 网络暂时失败，也不应阻止本地源内容生成检查
- 自动任务输出必须明确区分：
  - 远端拉取状态
  - 本地生成是否成功
  - 是否检测到待发布 HTML 变化
  - `academy` 镜像是否同步成功
- UI、样式、脚本和功能改动仍然要走人工确认，不由定时任务自动发布

## 2026-03-23：定时任务存在，但学术站与 `academy/` 仍然停在 2026-03-20

### 问题现象

- 源目录已经更新到 `2026-03-23`
- 本地生成站与线上 `academy/` 仍显示 `2026-03-20 21:00`
- 用户误以为“已经配置了每日同步，所以应该自动变新”

### 根因判断

这次不同步不是单点问题，而是三层叠加：

1. 每日定时任务确实存在，但执行失败  
   `daily-sci-sync` 自动化已创建并处于 `ACTIVE`，但 2026-03-20 与 2026-03-22 两次运行都在第一步 `git pull --ff-only origin main` 失败，原因是 `Could not resolve host: github.com`。因此后续 `sync_from_source.py`、提交、推送都没有发生。
2. 定时脚本只覆盖了 `jujutsu-sci` 仓库  
   [auto_sync_site.sh](/Users/zijian/Library/Mobile%20Documents/com~apple~CloudDocs/SCI/%E5%AD%A6%E6%9C%AF%E5%B0%8F%E9%BE%99%E8%99%BE-web/auto_sync_site.sh) 只会：
   - `git pull`
   - `python3 sync_from_source.py`
   - 提交并推送 HTML 到 `jujutsu-sci`
   
   它并不会把内容镜像到 `personal-homepage/academy/`。
3. `academy/` 当前生产链路是 GitHub Pages，而不是 CloudBase 直接出内容  
   2026-03-23 核查结果显示：
   - `bananabox.plus` 的 Pages 配置为 `main /`
   - `https://bananabox.plus/academy/` 响应头 `server: GitHub.com`
   
   这说明当前 `academy/` 想变新，必须：
   - 先同步 `personal-homepage` 仓库里的 `academy/`
   - 再等待 GitHub Pages 构建完成
   
   仅仅跑 `jujutsu-sci` 定时任务，或者仅做 CloudBase 发布，都不足以保证 `academy/` 变新。

### 修复动作

1. 在 [学术小龙虾-web](/Users/zijian/Library/Mobile%20Documents/com~apple~CloudDocs/SCI/%E5%AD%A6%E6%9C%AF%E5%B0%8F%E9%BE%99%E8%99%BE-web) 重新执行 `python3 sync_from_source.py`
2. 将最新生成内容提交并推送到 [zijianxcode/jujutsu-sci](https://github.com/zijianxcode/jujutsu-sci)，提交 `09872a5`
3. 将最新静态页面同步到 `personal-homepage/academy/`
4. 推送 [zijianxcode/personal-homepage](https://github.com/zijianxcode/personal-homepage) 的 `academy` 更新，提交 `c0eaa10`
5. 等待 GitHub Pages 构建成功后复核 [https://bananabox.plus/academy/](https://bananabox.plus/academy/)

### 验证结果

- `https://zijianxcode.github.io/jujutsu-sci/` 已更新为：
  - `论文总结 63`
  - `成员记录 162`
  - `最新时间 2026-03-23 09:07`
- `https://bananabox.plus/academy/` 已更新为：
  - `论文总结 63`
  - `成员记录 162`
  - `最新时间 2026-03-23 09:07`
- `academy` 首页包含：
  - `高星论文`
  - `周会讨论`
  - `每日评审`

### 预防措施

- 以后不要把“定时任务存在”视为“内容一定已上线”，必须检查执行结果和失败日志
- `jujutsu-sci` 自动任务只代表学术站源码仓库同步，不代表 `academy/` 已同步
- 只要目标是 `bananabox.plus/academy/`，发布检查必须覆盖：
  - `personal-homepage/academy/` 是否已更新
  - GitHub Pages 构建是否成功
  - 线上页面是否已返回最新时间
- 如果继续保留 CloudBase，也只能把它视为并行发布目标，不能默认等同于当前 `academy` 生产源
## 2026-03-20：GitHub 已更新，但 `bananabox.plus/academy/` 仍然是旧版

### 问题现象

- `jujutsu-sci` 仓库已经有最新提交
- `zijianxcode.github.io/jujutsu-sci/` 能看到新内容
- 但 [bananabox.plus/academy/](https://bananabox.plus/academy/) 仍然显示旧版首页
- 新增页面 `starred.html` 在 academy 子站上最初不可访问

### 影响范围

- `academy/` 子站不会自动跟随学术站源码仓库更新
- 用户容易误以为“GitHub 已更新 = 主站 academy 已更新”
- 首页入口、筛选标签、高星论文页等新功能会出现“GitHub 有、主站没有”的割裂

### 根因判断

根因不是页面生成失败，而是发布链路分成了两段：

1. 学术站源码仓库：
   [zijianxcode/jujutsu-sci](https://github.com/zijianxcode/jujutsu-sci)
2. 个人主页生产站：
   [bananabox.plus/academy/](https://bananabox.plus/academy/)

`academy/` 实际读取的是 `personal-homepage` 仓库中的 `academy/` 镜像目录，并且最终由 CloudBase 发布。  
所以只推 `jujutsu-sci`，不会自动让 `academy/` 变新。

另外，CloudBase CLI 初次发布时还踩到一个配置问题：
- `cloudbaserc.json` 使用了占位符 `{{env.TCB_ENV_ID}}`
- 直接发布会报错：`Env {{env.TCB_ENV_ID}} not exist in your account`
- 需要显式传入真实环境 `homepage-1gthisc4771d43ac`

### 修复动作

1. 先把最新学术站提交推到 `jujutsu-sci`
2. 再把 [学术小龙虾-web](/Users/zijian/Library/Mobile%20Documents/com~apple~CloudDocs/SCI/%E5%AD%A6%E6%9C%AF%E5%B0%8F%E9%BE%99%E8%99%BE-web) 同步覆盖到 `personal-homepage` 的 `academy/` 子目录
3. 把 `personal-homepage` 的更新提交并推到远端
4. 使用真实环境变量执行 CloudBase 发布：

```bash
cd /tmp/personal-homepage-preview
rm -rf .cloudbase-deploy
mkdir -p .cloudbase-deploy
cp *.html CNAME .cloudbase-deploy/
cp -r Assets projects documents academy .cloudbase-deploy/
TCB_ENV_ID='homepage-1gthisc4771d43ac' \
  npm exec --yes --package @cloudbase/cli@2.12.2 -- \
  tcb hosting deploy .cloudbase-deploy .
```

### 预防措施

- 以后默认按“三段同步规则”执行：
  本地生成 -> GitHub 仓库 -> CloudBase 发布
- 只要目标地址包含 `bananabox.plus/academy/`，就必须检查 `personal-homepage/academy/` 是否已重新同步
- 以后发布 CloudBase 时，不依赖占位符环境名，直接显式传入真实 `TCB_ENV_ID`
- 每次发布前，先确认 `.cloudbase-deploy/academy/` 内已经包含最新文件，例如 `starred.html`

### 验证结果

- `academy/` 首页已出现 `高星论文`
- `academy/` 首页快捷筛选已变为 `周会讨论`、`每日评审`
- [https://bananabox.plus/academy/starred.html](https://bananabox.plus/academy/starred.html) 已可访问
