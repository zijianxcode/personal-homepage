# 站点结构（不可擅自改动）

除非用户**明确要求**，以下内容视为固定结构，发布脚本、AI 协作、定时任务均不得改变。

## 固定 URL 映射

| 路径 | 页面 | 标题验收 |
|------|------|----------|
| `/` | 个人主页（Work / Info / Things） | `aspera ad astra` |
| `/academy/` | 学术研究所二级站 | `研究所` |
| `/time-ink/` | Time Ink 项目 | 按项目页验收 |
| `/card-freeze/` | Card Freeze（Visual Coding #03） | 按项目页验收 |
| `/projects/` | 实验作品 | 按项目页验收 |
| `/emergency/` | 应急说明（运维页，非内容站） | `应急访问` |

## 仓库目录映射

```text
personal-homepage/
├── index.html              ← 个人主页（唯一）
├── Assets/ projects/ documents/ time-ink/ card-freeze/
├── academy/                ← 学术内容（镜像自 jujutsu-sci）
│   └── index.html          ← 研究所首页（唯一）
└── emergency/              ← 应急说明与探测状态
```

## 硬性禁止

1. **禁止**将 `academy/` 内任何 HTML 复制或部署到仓库根目录或 CloudBase 根路径
2. **禁止**单独执行 `tcb hosting deploy academy/` 或等价「只部署 academy 到根路径」命令
3. **禁止**在 `auto_sync` / Hermes 流程中跳过整站 `npm run deploy`
4. **禁止**未经用户要求修改 URL 层级、主页与 academy 的从属关系、或新增/删除顶级路径

## 唯一合法发布方式

```bash
cd /Users/zijian/Documents/Code/jujutsu-sci
./auto_sync_site.sh sync
```

或手动：

```bash
cd /Users/zijian/Documents/Code/personal-homepage
npm run deploy          # 整站 → CloudBase 根路径 .
npm run verify:production
```

`npm run deploy` 必须上传 `.cloudbase-deploy/` **整包**，其中：

- `.cloudbase-deploy/index.html` = 个人主页
- `.cloudbase-deploy/academy/index.html` = 研究所

## 发布验收（缺一不可）

```bash
npm run test:site-integrity
node scripts/verify-deploy-bundle.js   # 部署包本地结构
npm run verify:production              # 线上 / 与 /academy/
```
