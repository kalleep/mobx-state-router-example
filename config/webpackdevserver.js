"use strict"
const config = require("./webpack.dev.js");
const paths = require("./paths");

module.exports = {
	hot: true,
	quiet: true,
	https: false,
	overlay: false,
	compress: true,

	disableHostCheck: true,
	clientLogLevel: "none",
	watchContentBase: true,

	contentBase: paths.public,
	publicPath: config.output.publicPath,

	historyApiFallback: true,

	watchOptions: {
		ignored: /node_modules/,
	}
};