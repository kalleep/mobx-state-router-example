const paths = require("./paths");
const names = require("./names");
const webpack = require("webpack");

const HtmlWebPackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
	mode: "development",
	devtool: "eval-source-map",
	entry: [
		require.resolve("./polyfill"),
		paths.index
	],
	output: {
		pathinfo: true,
		publicPath: "/",
		path: paths.build,
		filename: names.filename,
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
								presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript" ],
								plugins: [
									["@babel/plugin-proposal-decorators", { "legacy": true }],
 									["@babel/plugin-proposal-class-properties", { "loose": true }]
								]
							}
						}]
					}
				]
			}
		]

	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebPackPlugin({
			inject: true,
			template: paths.html
		}),
		new ForkTsCheckerWebpackPlugin()
	]
}