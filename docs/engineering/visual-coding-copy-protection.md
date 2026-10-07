# Visual Coding 网站搬运防护

需求确认于 2026-10-07；实施于 2026-10-08。用户确认仅处理从网站直接扒取，GitHub 公开仓库保持现状。

## 目标与边界

七个体验页与作品列表加入生产域名检查；Vibe Fiber 和两个时钟的脚本轻量混淆。四个已打包应用保留原代码，仅在入口前增加混淆后的域名检查。第三方运行库、模型、纹理、音频保留原文件和署名。源码不改写，构建产物不携带 source map。此方案提高直接搬站成本，不是身份认证、保密或禁止单个素材下载。修改代码可绕过检查。

生产只允许 `bananabox.plus`、`www.bananabox.plus` 和现有冷备 `zijianxcode.github.io`。复制到其他域名、localhost 或 file:// 的生产包返回原站，Worker 停止运行。开发使用仓库源码；验证生产包通过浏览器请求路由保留生产域名。

## 实施计划

- [x] 用 Node 测试验证合法域名、伪装域名、本地副本、Worker 和跨脚本全局变量。
- [x] 新增发布后处理，为混淆脚本增加缓存版本并同步 HTML 与 Worker 引用；构建失败阻止发布。
- [x] 将处理接入 `build`、`build:cloudbase`，部署验收检查项目页面及发布清单。
- [x] 验证七个项目的浏览器运行、织字图片 Worker、音乐与图片导出，以及异域副本自动返回原站。
- [x] 整站发布覆盖原脚本路径，检查旧 URL 已返回混淆代码；完成生产验收并提交推送。

## 依赖审查与回滚

`javascript-obfuscator@4.1.1`、`terser@5.44.0`、`parse5@7.3.0` 为固定版本的本地构建依赖，不增加浏览器第三方脚本请求。关闭控制流平坦化、死代码注入、反调试、自防御、属性改名及全局改名，避免影响渲染性能和跨脚本调用。每个文件使用独立标识符前缀；保留许可证注释。

回滚：还原构建脚本与 package 配置，用未处理源码整站重新构建和发布；旧脚本可由源码重新生成，不删除用户内容。

## 托管配置

CloudBase `TcbCheckResource` 确认主域、www 和默认托管域的 Referer 防盗链均关闭。SDK 的 `ITcbRefererRule` 只支持 RefererType、Referers、AllowEmpty，不能按资源路径限定；按路径规则的请求被 UnknownParameter 拒绝，未生效。整站白名单会阻止从搜索和社交平台进入公开页面，因此本次保持云端设置不变。前端检查不能阻止 HTTP 下载；本次交付针对直接搬运后的运行。Effecter 首载有大量模型分段请求，未擅自设置全站限频。

配置依据：https://docs.cloudbase.net/api-reference/manager/node/hosting 。

## 并行发布合并

最终同步发现远端提交 `877f3fc` 新增 Grid Poster。已 rebase 并保留其封面、首位作品卡片和构建目录，将 Grid Poster 同样加入入口绑定。发布处理现在从 `visual-coding.html` 的本地作品卡片自动收集体验入口；后续新增作品无需维护第二份页面清单。

## 验证范围与结果

- `npm run test:vc-protection`：4 项通过，覆盖正式域名、伪装域名、localhost / file 副本、Worker、跨文件经典脚本全局、许可证及已打包模块原代码完整保留。
- `build` 和 `build:cloudbase` 均生成 8 个页面、13 个脚本的防护，两个时钟的内联脚本也完成混淆。
- 七个入口本地浏览器检查通过：织字与图案 Worker、两个时钟 Canvas、Card Freeze、Far From Here 场景及四声部调度状态、Grid Poster 编辑器、Effecter 上传界面。移除页面头部检查的异域副本仍由应用脚本阻断并返回原站。
- Far From Here 在测试设备上音频时钟停滞；同一环境未修改版本也复现，不能宣称本次验证证明真实声音输出。Effecter 模型与运行库未修改；页面巡检阻止后台模型重复下载，不代替完整 AI 推理回归。
- 原六项目正式域名巡检通过，无新增页面异常；新增 Grid Poster 合并后重新整站发布，并检查正式文件哈希与主站 / academy 健康。

当前发布脚本原始内容 1,070,277 bytes，处理后 1,060,333 bytes。四个框架打包入口保留原代码字节，仅增加前置检查。没有添加禁止右键、F12 拦截、循环 debugger 或新运行时外部脚本。

最终生产发布：273 个文件上传成功，失败 0；21 个防护文件匹配本地产物，Grid Poster 封面字节保持一致。七项目正式域名巡检及移除 head 检查的复制站跳转通过，无新增页面异常；主页与 academy 发布 / 健康检查通过。证据：`output/playwright/vc-protection-production-results.json`、`vc-protection-production-files.json` 与 `vc-protection-local-results.json`。
