const paths = require("./paths");
const names = require("./names");
const webpack = require("webpack");

const HtmlWebPackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const filename = "static/js/typescript-react-template.[chunkhash:8].js";

module.exports = {
	mode: "development",
	devtool: "eval-source-map",
	"entry": [
		require.resolve("./polyfill"),
		paths.index
	],
	output: {
		path: paths.build,
		filename: filename,
		publicPath: "/"
	},
	resolve: {
		modules: ["node_modules"],
		extensions: [".js", ".ts", ".tsx", ".css",".scss"]
	},
	module: {
		strictExportPresence: true,
		rules: [
			{
				oneOf:[
					{
						test: /\.tsx?$/,
						include: paths.dir,
						use: [{
							loader: "thread-loader",
							options: {
								workers: require("os").cpus().length - 1,
							},
						},
						{
							loader: "ts-loader",
							options: {
								happyPackMode: true
							}
						},
						{
							loader: "babel-loader",
							options: {
								presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
								plugins: [ [ "@babel/plugin-proposal-decorators", { "legacy": true } ] ]
							}
						}]
					}
				]
			}
		]

	},
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		new HtmlWebPackPlugin({
			inject: true,
			template: paths.html,
			minify: {
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true,
			},
		}),
		new ForkTsCheckerWebpackPlugin()
	]

}