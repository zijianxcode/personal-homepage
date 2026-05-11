# 内容同步说明

## 同步入口

项目通过下面这条命令，从源目录重新拉取内容并重建页面：

```bash
python3 sync_from_source.py
```

## 同步来源

源目录路径：
`/Users/zijian/Library/Mobile Documents/com~apple~CloudDocs/SCI/2026sci1/学术小龙虾`

仓库里的 `config.json` 保存可共享默认值。机器本地路径差异写入 `config.local.json`，它会覆盖 `config.json`，并且不会提交到 Git。

## 同步规则

脚本会：
- 扫描源目录中的 Markdown 文件
- 忽略 `html/`、`legacy-html/`、`attachments/`、`inbox/` 等非正式记录目录
- 读取时间目录并按倒序排序
- 优先解析正文中的真实时间信息，再回退到目录时间
- 自动生成首页、主题页、成员页、归档页和 `高星论文` 页

## 源目录整理规则

源目录已整理成下面的稳定结构：

```text
学术小龙虾/
├── records/
│   └── YYYY/MM/DD/slot/*.md
│   └── YYYY/MM/DD/slot/<paper-key>/论文总结.md
├── attachments/
├── inbox/
└── legacy-html/
```

含义：
- `records/YYYY/MM/DD/HH/`：正式小时记录，例如 `records/2026/04/21/11/`
- `records/YYYY/MM/DD/HH/<paper-key>/`：Hermes 单篇论文采集目录，例如 `records/2026/04/27/16/2604.08362/`
- `records/YYYY/MM/DD/daily/`：原来只有日期、没有小时的日记录
- `records/YYYY/MM/DD/中文后缀/`：原来带后缀的反思、团队反思等记录
- `attachments/`：顶层散落的 PDF、DOCX 等附件
- `inbox/`：顶层散落但暂未归档的 Markdown
- `legacy-html/`：旧版 HTML 产物归档，不参与同步

如源目录后续又出现新的顶层时间目录或散落文件，可以先预览整理计划：

```bash
python3 organize_source.py
```

确认没有冲突后再执行：

```bash
python3 organize_source.py --apply
```

整理脚本只移动文件，不生成网页；整理后仍需运行 `python3 sync_from_source.py`。

## 三段同步规则

以后只要这个学术站发生改动，默认按三段理解：

1. 本地生成：
   在当前仓库运行 `python3 sync_from_source.py`。
2. GitHub 同步：
   把本地生成结果提交并推送到 [zijianxcode/jujutsu-sci](https://github.com/zijianxcode/jujutsu-sci)。
3. `academy` 发布同步：
   如果 [bananabox.plus/academy/](https://bananabox.plus/academy/) 也要保持一致，按 [部署发布说明](DEPLOYMENT.md) 执行。

补充说明：
- `jujutsu-sci` 是学术站源码仓库。
- 所以“本地站已经更新”或“jujutsu-sci 已经更新”都不等于 `academy/` 一定更新。
- 数据同步与功能发布要分开理解：
  - 来自源文件夹的内容更新，允许自动同步到 `jujutsu-sci` 与 `academy`
  - UI、样式、脚本、交互和新功能改动，仍然属于需要人工确认的发布范围
- 当前每日自动任务默认只会自动发布数据页 HTML 变化；如果检测到非 HTML 改动，会停止并汇报，不自动上线。

## 内容识别方式

系统根据文件名识别内容类型：
- `论文总结.md` -> 论文总结
- `升级迭代.md` -> 升级迭代
- `日会记录.md` -> 日会记录
- `团队讨论.md` -> 团队讨论
- `*-能力进化.md` -> 成员页内容

Hermes 采集时，每篇论文必须写入独立 `<paper-key>/论文总结.md`。角色短评可以放在同一个目录下，命名为 `五条悟-能力进化.md`、`野蔷薇-能力进化.md` 等。带角色前缀的 `*-论文总结.md` 不作为 canonical 论文总结识别。

## 时间解析规则

当前同步逻辑会优先尝试识别正文中的这些时间字段：
- `生成时间`
- `更新时间`
- `记录时间`
- `整理时间`
- `时间`
- `日期 + 时间` 组合字段

如果正文里没有可靠时间，再回退到目录名时间，例如：
- `2026-03-18-20`
- `2026-03-18`

这样可以避免首页“最新时间”只跟着目录名走，和正文实际记录时间不一致。

## 主题页生成方式

研究主题页来自 `论文总结.md` 的自动归类，当前会整理出：
- AI
- NLP
- CV
- ML
- HCI
- UX

## 同步后的建议检查项

每次同步完成后，建议检查：
- 首页标题和导览是否正常
- 首页“最新时间”是否符合最新源文件
- 论文总结页是否按时间倒序
- 成员页是否正常刷新
- 研究主题分布与主题页是否一致
- 详情页目录、筛选和阅读区是否正常

## 问题排查流程

如果你发现“内容明明更新了，但网站没变”，按下面顺序排查：
1. 先确认源目录里是否真的有新文件或新时间字段
2. 如果源目录根部重新堆了很多时间目录，先运行 `python3 organize_source.py` 检查结构
3. 运行 `python3 sync_from_source.py`
4. 检查生成结果里的 `index.html` 是否已经变化
5. 检查 Git 是否有待提交变更
6. 检查 `jujutsu-sci` 是否已经推到远端
7. 如果目标地址是 `bananabox.plus/academy/`，继续检查 `personal-homepage/academy/` 是否已同步
8. 按 [部署发布说明](DEPLOYMENT.md) 检查当前生产链路是否已发布
9. 最后再排查浏览器缓存或 CDN 缓存

## 记录要求

以后凡是出现同步异常、排序异常、时间错误、漏页面等问题，都要补记到：
- [问题记录与修复日志](ISSUE_LOG.md)
