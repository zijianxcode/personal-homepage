# 项目结构

## 目录角色

这个项目本质上是一个“源内容驱动的静态站点”：
- 源目录负责存放原始 Markdown 内容
- 网页项目负责把内容整理成静态页面

## 网页项目中的主要文件

### 页面文件
- `index.html`：首页
- `papers.html`：论文总结页
- `archive.html`：全部归档页
- `meetings.html`：日会记录页
- `upgrades.html`：升级迭代页
- `discussion.html`：团队讨论页

### 主题页
- `AI.html`
- `NLP.html`
- `CV.html`
- `ML.html`
- `HCI.html`
- `UX.html`

### 成员页
- `悠仁.html`
- `野蔷薇.html`
- `惠.html`
- `五条悟.html`

### 样式与脚本
- `site.css`：共享视觉样式
- `site-index.js`：首页交互脚本
- `site-detail.js`：详情页交互脚本

### 构建入口
- `sync_from_source.py`：扫描源目录并重建页面

### 项目文档
- `README.md`：总览入口
- `docs/README.md`：文档导航，说明不同问题应该先看哪份文档
- `docs/PROJECT_STRUCTURE.md`：结构说明
- `docs/CONTENT_SYNC.md`：同步逻辑与排查流程
- `docs/DEPLOYMENT.md`：发布流程与线上排查
- `docs/VERSION_HISTORY.md`：版本定位、更新说明和发包校验信息
- `docs/ISSUE_LOG.md`：问题记录与修复日志
- `releases/README.md`：发包归档规则与 zip 清单

### 版本归档
- `releases/packages/jujutsu-sci-v1.0.0.zip`：v1.0.0 完整静态站点发包
- `releases/packages/jujutsu-sci-v2.0.0.zip`：v2.0.0 完整静态站点发包

## 推荐理解方式

如果要继续维护项目，优先理解这几层关系：
1. 先看 [文档导航](README.md)，确认当前问题归属哪份文档。
2. 源目录里的 Markdown 决定内容。
3. `sync_from_source.py` 决定页面生成规则。
4. `site.css` 决定视觉和布局。
5. `site-detail.js` / `site-index.js` 决定页面交互。
6. `docs/ISSUE_LOG.md` 只记录历史问题与修复经验，不承载常规规则。

## 当前项目特点

- 不依赖前端框架
- 不依赖打包工具
- 以静态 HTML 为主
- 可以直接双击本地打开
- 也适合后续直接部署到 GitHub Pages
