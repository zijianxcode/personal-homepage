# 文档导航

这个目录的作用不是记录所有过程，而是让维护时能快速找到“该看哪份文档”。新增内容前先在这里确认归属，避免同一规则散落在多份文档里。

## 先查这里

| 想解决的问题 | 先看 | 只在这里维护 |
| --- | --- | --- |
| 采集应该写什么、怎么评分、哪些内容不要重复 | [COLLECTION_POLICY.md](COLLECTION_POLICY.md) | 采集契约、10 分制、去冗余规则 |
| Hermes 应该写到哪个路径 | [HERMES_MIGRATION.md](HERMES_MIGRATION.md) | Hermes 职责边界、输出路径 |
| 源目录如何同步成网页 | [CONTENT_SYNC.md](CONTENT_SYNC.md) | 本地生成、内容识别、时间解析、同步排查 |
| 怎么发布到 GitHub / academy / CloudBase | [DEPLOYMENT.md](DEPLOYMENT.md) | 发布链路、academy 镜像范围、CloudBase 命令 |
| 首页和详情页的信息架构为什么这样设计 | [INFORMATION_ARCHITECTURE.md](INFORMATION_ARCHITECTURE.md) | 长期 IA 契约 |
| 这次 IA 迭代前后对比与截图 | [IA_ITERATION_SUMMARY.md](IA_ITERATION_SUMMARY.md) | 复盘、截图、设计逻辑 |
| 以前踩过什么坑 | [ISSUE_LOG.md](ISSUE_LOG.md) | 故障、根因、修复、预防措施 |
| 当前版本和发包记录 | [VERSION_HISTORY.md](VERSION_HISTORY.md) | 版本定位、发包、校验信息 |
| 仓库文件分别做什么 | [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) | 文件结构、维护入口 |

## 新增记录规则

- **规则写到规则文档**：采集规则写 `COLLECTION_POLICY.md`，发布规则写 `DEPLOYMENT.md`，同步规则写 `CONTENT_SYNC.md`。
- **故障写到问题日志**：只有出现过 bug、误判、部署失败、同步异常时，才补 `ISSUE_LOG.md`。
- **历史记录不反复改写**：旧问题日志可以保留当时的路径和判断，新规则只更新到对应的权威文档。
- **版本写到版本历史**：只记录已经形成版本意义或发布意义的变化，不写过程流水账。
- **复盘写到复盘文档**：有前后对比、截图、设计逻辑时，才写 `IA_ITERATION_SUMMARY.md`。
- **不要复制长段落**：如果另一个文档已有完整流程，只加链接和一句定位说明。

## 常用关键词

排查前先用 `rg` 搜现有记录：

```bash
rg -n "10 分制|评分|五条悟-汇总|Hermes|academy|CloudBase|site.css|同步|部署" docs README.md
```
