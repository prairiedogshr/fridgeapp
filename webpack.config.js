var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'client/public');
var APP_DIR = path.resolve(__dirname, 'client/app');

var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + "/client/app/index.html",
	filename: 'index.html',
	inject: 'body'
})

var config = {
	entry: APP_DIR + '/app.js',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
		module: {
			loaders: [
			{
				test: /\.js?/,
				include: APP_DIR,
				loader: 'babel-loader'
			}]
		},
		plugins: [HtmlWebpackPluginConfig]
};

module.exports = config;