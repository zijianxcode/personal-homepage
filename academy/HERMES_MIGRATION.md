# Hermes 采集迁移说明

## 职责边界

Hermes 只负责上游采集：查找论文、生成结构化 Markdown、写入源目录。它不直接修改 HTML，不提交 Git，也不发布到 GitHub Pages 或 `academy` 镜像。

网页项目继续负责“源 Markdown -> 静态站点”的生成：

```bash
python3 sync_from_source.py
./auto_sync_site.sh check
```

## 输出路径

Hermes 每次任务只处理一篇论文，输出到一个独立目录：

```text
学术小龙虾/
└── records/
    └── YYYY/
        └── MM/
            └── DD/
                └── HH/
                    └── <paper-key>/
                        ├── 论文总结.md
                        └── <角色>-能力进化.md  # 可选
```

`<paper-key>` 优先使用 arXiv ID，例如 `2604.08362`。没有 arXiv ID 时，使用短 slug，例如 `wiserui-bench`。

## Canonical 论文文件

每篇论文只有一个 canonical 总结文件，文件名必须是：

```text
论文总结.md
```

它必须包含：

- 论文标题
- 作者
- 来源、会议、期刊、arXiv、DOI 或 URL
- 发表或提交日期
- 领域标签
- 综合评分，评分标准以 [内容采集规则](COLLECTION_POLICY.md) 为准
- 六段式正文：研究什么、为什么研究、别人做过什么、作者怎么研究、发现了什么、价值和不足

不要再生成 `野蔷薇-论文总结.md` 这类角色名前缀的完整论文总结；这类文件不会作为 canonical 论文进入 `papers.html`。

## 角色短评

角色短评是可选附属文件，必须和 canonical 论文文件放在同一个 `<paper-key>/` 目录里。

允许的命名：

```text
悠仁-能力进化.md
野蔷薇-能力进化.md
惠-能力进化.md
五条悟-能力进化.md
全栈工程师-能力进化.md
```

角色短评只写评分、批判、与你课题的关系、下一步动作，不重复完整论文摘要。

## 禁止写入

Hermes 不应写入这些目录：

- `legacy-html/`
- `attachments/`
- `inbox/`
- 网页项目目录

如果需要附件，先把附件留给人工确认或单独的附件流程处理。

## 更新规则

写入前先检查目标 `<paper-key>/` 是否已存在。存在则更新同一目录中的文件，不新建重复目录。

采集完成后只汇报：

- 写入路径
- 一句变更摘要

发布、推送、镜像同步都交给人工确认后的本地流程。
