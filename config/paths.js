const fs = require("fs");
const path = require("path");

const appDir = fs.realpathSync(process.cwd());

const resolve = relativePath => path.resolve(appDir, relativePath);

module.exports = {
	dir: resolve("src/"),
	build: resolve("dist"),
	public: resolve("public"),
	index: resolve("src/index.tsx"),
	html: resolve("public/index.html")
};