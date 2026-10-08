# TypeBlast 主站接入 · 2026-10-09

用户明确要求完成后部署，并使用附件作为封面、增加像素动效。主站真源为 `/Users/zijian/Documents/Code/personal-homepage`，正式体验路径 `https://bananabox.plus/typeblast/`；列表入口 `https://bananabox.plus/visual-coding.html`。遵循新增倒序，作为第九项位于首位。

## 封面与动画

附件 PNG 480 × 480，复制为 `Assets/img/typeblast-cover.png`，SHA-256 `1a7c78a6f9b4b7ac29db2c5c98c8fefc054c323ffd15192784c8870d430cba1e`。原字节与完整画面保留，不裁剪、不重绘、不改成 GIF。CSS 用同一 PNG 的 16 个区域叠加在原图上；各钥匙按错开的六秒循环，末段短暂移动两像素、减弱透明度，使用 `steps(1, end)`。hover 不缩放封面，手机同样播放；没有 JavaScript 时原图保持可见。

`Assets/js/typeblast-cover.js` 使用 IntersectionObserver 与页面可见性暂停动画；减少动态效果时隐藏动画层，显示完整静态原图。无 Canvas / 每帧 JS / 新第三方库。固定图片宽高避免布局移动。

## 发布流程

1. 主站 `git fetch origin`，本地 main 与 origin/main 对齐后修改；若系统 DNS 不通，使用本机现有 HTTP 代理而不改全局 Git 设置。
2. TypeBlast `npm test`、`TYPEBLAST_BASE=/typeblast/ npm run build`、`npm run test:sites`。保留 Sites scaffold，但本次发布采用主站 CloudBase 流程。
3. `dist/client/` 复制到主站 `typeblast/`，加入来源说明 `assets/NOTICE.txt`；不发布测试、原始字体或研究截图。游戏核心和性能优化不变。子路径资源与返回入口均在源码实现。
4. 主站两种构建包含 typeblast，Visual Coding 保护流程自动识别新入口。执行保护测试、权限/安全/站点结构检查，再 `CI=1 npm run deploy` 整站上传。
5. `npm run verify:production` 与 `npm run health:production`，核对主域名入口、项目全量资源和封面哈希，再检查线上卡片、昼夜切换与返回链接。按主站规范将本次修改提交推送。

## 验证记录

46 项 TypeBlast 测试、4 项 Sites scaffold 测试、4 项主站保护测试通过。源引擎 AST 保真检查全部通过。真实本地静态子路径浏览器：新卡片首位、英文双语说明、完整像素图、进入游戏、键入 ok 后分数 70 / combo 2、切换日间保留游戏、右上返回与主题按钮避让，均已检查。截图在 TypeBlast `output/release-2026-10-09/`。

准备检查之后的真实发布与验证结果见下文。

## 正式发布结果

CloudBase 整站发布完成：343 个文件，失败 0。最终版本在移动软键盘出现时将 HUD 放到返回入口下方，避免右上导航与原站顶置数据重叠。

正式主域名 `/typeblast/`、Visual Coding 页面、原始封面、动效脚本、主站 CSS 及 51 个 TypeBlast 文件合计 **55 / 55** 与最终发布包 SHA-256 完全一致，包含所有 22 种 WOFF2 和许可文件。核验使用无缓存参数的正式 URL，没有本地资源映射。主站与 academy 的生产结构检查和健康检查通过。文件核验记录：TypeBlast `output/release-2026-10-09/public-resources.json`。

本次最终浏览器验证有明确边界：本地桌面卡片、进入游戏、英文输入与昼夜切换已实际验证；随后 Mac 锁屏，无法继续原生浏览器操作。最后一轮五种手机/平板宽度、减少动态效果的视觉复查、线上交互和新 Lighthouse 审计未完成，不将过往截图或性能专项测试冒充本次结果。动效可见性/后台/离屏/减少动态效果分支通过运行时逻辑检查，CSS 静态降级已实现。
