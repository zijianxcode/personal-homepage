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
const aiEntryPosition = index.indexOf('data-permit-resource="ai-innovative-design"');
const digitalEntryPosition = index.indexOf('data-permit-resource="things"');

assert(aiEntryPosition !== -1, "Things 首页缺少 ai-innovative-design 入口资源标记");
assert(digitalEntryPosition !== -1, "Things 首页缺少原数字与体验资源标记");
assert(aiEntryPosition < digitalEntryPosition, "新入口需要排在数字与体验前面");
assert(index.includes("人工智能与创新设计"), "新入口缺少中文标题");
assert(index.includes("AI &amp; Innovative"), "新入口缺少英文副标题");
assert(index.includes("2026.4 讲义内容"), "新入口缺少 2026.4 讲义内容");

const aiPagePath = path.join(root, "things-ai-innovative-design.html");
assert(fs.existsSync(aiPagePath), "缺少人工智能与创新设计受限子页面");
const aiPage = read("things-ai-innovative-design.html");
assert(aiPage.includes('data-things-resource="ai-innovative-design"'), "新子页面缺少资源标记");
assert(aiPage.includes("人工智能与创新设计"), "新子页面缺少标题");

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
