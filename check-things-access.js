const fs = require("fs");
const path = require("path");

const root = __dirname;

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

const index = read("index.html");
const cultureEntryPosition = index.indexOf('data-permit-resource="cultural-brand-innovation"');
const hciEntryPosition = index.indexOf('href="things-hci-prototyping.html?v=20260507-hci-permit"');
const aiEntryPosition = index.indexOf('data-permit-resource="ai-innovative-design"');
const digitalEntryPosition = index.indexOf('data-permit-resource="things"');
const compositionEntryPosition = index.indexOf('data-permit-resource="composition-and-form"');

assert(hciEntryPosition !== -1, "Things 首页缺少 HCI 入口链接");
assert(cultureEntryPosition !== -1, "Things 首页缺少文化品牌创新入口资源标记");
assert(aiEntryPosition !== -1, "Things 首页缺少 ai-innovative-design 入口资源标记");
assert(digitalEntryPosition !== -1, "Things 首页缺少原数字与体验资源标记");
assert(compositionEntryPosition !== -1, "Things 首页缺少构成与形式入口资源标记");
assert(cultureEntryPosition < compositionEntryPosition, "文化品牌创新入口需要排在构成与形式前面");
assert(compositionEntryPosition < hciEntryPosition, "构成与形式入口需要排在最新课程最前面");
assert(hciEntryPosition < aiEntryPosition, "新 HCI 入口需要排在 AI 入口前面");
assert(aiEntryPosition < digitalEntryPosition, "新入口需要排在数字与体验前面");
assert(index.includes("文化品牌创新"), "新入口缺少文化品牌创新中文标题");
assert(index.includes("CULTURAL BRAND INNOVATION"), "新入口缺少文化品牌创新英文标题");
assert(index.includes("构成与形式"), "新入口缺少构成与形式中文标题");
assert(index.includes("COMPOSITION AND FORM"), "新入口缺少构成与形式英文标题");
assert(!index.includes("Composition and Form"), "构成与形式英文标题需要统一为大写");
assert(index.includes("2026.9 讲义内容"), "新入口缺少 2026.9 讲义内容");
assert(index.includes("人机交互与原型设计"), "新入口缺少中文标题");
assert(
  index.includes("HCI &amp; PROTOTYPING") || index.includes("Human-Computer Interaction &amp; Prototyping"),
  "新入口缺少英文副标题"
);
assert(index.includes("2026.5 讲义内容"), "新入口缺少 2026.5 讲义内容");
assert(index.includes("人工智能与创新设计"), "新入口缺少中文标题");
assert(index.includes("AI &amp; Innovative"), "新入口缺少英文副标题");
assert(index.includes("2026.4 讲义内容"), "新入口缺少 2026.4 讲义内容");

const hciPagePath = path.join(root, "things-hci-prototyping.html");
assert(fs.existsSync(hciPagePath), "缺少人机交互与原型设计受限子页面");
const hciPage = read("things-hci-prototyping.html");
assert(hciPage.includes("人机交互与原型设计"), "HCI 子页面缺少标题");
assert(hciPage.includes("20260507"), "HCI 子页面缺少访问码配置");
assert(hciPage.includes("课程预告"), "HCI 子页面缺少课程预告链接名称");

const aiPagePath = path.join(root, "things-ai-innovative-design.html");
assert(fs.existsSync(aiPagePath), "缺少人工智能与创新设计受限子页面");
const aiPage = read("things-ai-innovative-design.html");
assert(aiPage.includes('data-things-resource="ai-innovative-design"'), "新子页面缺少资源标记");
assert(aiPage.includes("人工智能与创新设计"), "新子页面缺少标题");

const compositionPagePath = path.join(root, "things-composition-and-form.html");
assert(fs.existsSync(compositionPagePath), "缺少构成与形式受限子页面");
const compositionPage = read("things-composition-and-form.html");
assert(compositionPage.includes('data-things-resource="composition-and-form"'), "构成与形式子页面缺少资源标记");
assert(compositionPage.includes("构成与形式"), "构成与形式子页面缺少中文标题");
assert(compositionPage.includes("Assets/js/things-page.js"), "构成与形式子页面需要使用共享内容加载逻辑");
assert(compositionPage.includes('data-things-context="COMPOSITION AND FORM"'), "构成与形式子页面英文标题需要统一为大写");

const culturePagePath = path.join(root, "things-cultural-brand-innovation.html");
assert(fs.existsSync(culturePagePath), "缺少文化品牌创新受限子页面");
const culturePage = read("things-cultural-brand-innovation.html");
assert(culturePage.includes('data-things-resource="cultural-brand-innovation"'), "文化品牌创新子页面缺少资源标记");
assert(culturePage.includes('data-things-context="CULTURAL BRAND INNOVATION"'), "文化品牌创新子页面英文标题需要使用大写");
assert(culturePage.includes("文化品牌创新"), "文化品牌创新子页面缺少中文标题");
assert(culturePage.includes("Assets/js/things-page.js"), "文化品牌创新子页面需要使用共享内容加载逻辑");

const entryScript = read("Assets/js/script.js");
assert(entryScript.includes("querySelectorAll('[data-things-permit-entry]')"), "首页入口脚本需要支持多个 Things 入口");
assert(entryScript.includes("resource: resource"), "首页入口验证请求需要携带 resource");

const thingsPageScript = read("Assets/js/things-page.js");
assert(thingsPageScript.includes("getThingsPageConfig"), "Things 子页面脚本需要读取页面级配置");
assert(thingsPageScript.includes("resource="), "Things 内容请求需要按 resource 拉取");

const cloudFunction = read("cloudfunctions/dm-api/index.js");
assert(cloudFunction.includes("PERMIT_RESOURCES_JSON"), "云函数需要支持 PERMIT_RESOURCES_JSON");
assert(cloudFunction.includes("normalizePermitResource"), "云函数需要规范化 resource");
assert(cloudFunction.includes("parsePermitResources"), "云函数需要解析多资源受限内容配置");
assert(cloudFunction.includes("body.resource"), "云函数验证接口需要读取 body.resource");
assert(cloudFunction.includes("query.resource"), "云函数内容接口需要读取 query.resource");
assert(cloudFunction.includes("DEFAULT_ALLOWED_ORIGINS"), "云函数需要使用明确的 CORS 来源白名单");
assert(!cloudFunction.includes('headers["Access-Control-Allow-Origin"] = "*"'), "云函数不得开放通配 CORS");
assert(cloudFunction.includes("MAX_REQUEST_BODY_LENGTH"), "云函数需要限制请求体大小");
assert(cloudFunction.includes("MAX_DOCUMENT_ID_LENGTH"), "云函数需要限制数据库文档 ID");

const cloudbaseConfig = read("cloudbaserc.json");
assert(cloudbaseConfig.includes("PERMIT_RESOURCES_JSON"), "CloudBase 配置缺少 PERMIT_RESOURCES_JSON 环境变量");

const envExample = read(".env.example");
assert(envExample.includes("PERMIT_RESOURCES_JSON"), ".env.example 缺少 PERMIT_RESOURCES_JSON 示例");

const forbiddenValues = (process.env.FORBIDDEN_STRINGS || "")
  .split("||")
  .map((value) => value.trim())
  .filter(Boolean);

if (forbiddenValues.length > 0) {
  const filesToScan = [
    "index.html",
    "things-cultural-brand-innovation.html",
    "things-hci-prototyping.html",
    "things-ai-innovative-design.html",
    "things-digital-experience.html",
    "Assets/js/script.js",
    "Assets/js/things-page.js",
    "cloudfunctions/dm-api/index.js",
    "cloudbaserc.json",
    ".env.example",
  ];

  filesToScan.forEach((relativePath) => {
    const content = fs.existsSync(path.join(root, relativePath)) ? read(relativePath) : "";
    forbiddenValues.forEach((value) => {
      assert(!content.includes(value), `${relativePath} 不应包含受限配置明文`);
    });
  });
}

console.log("Things access checks passed");
