const fs = require("fs");
const path = require("path");

const filePath = path.resolve(
  __dirname,
  "node_modules/prismarine-proxy/src/instant_connect_proxy.js",
);

let content = fs.readFileSync(filePath, "utf8");

content = content.replace(
  `const verMap = {
  '1.8.9': '1.8.8'
}`,
  `const verMap = {
  '1.8.8': '1.8.8',
  '1.8.9': '1.8.8'
}`,
);
