var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src');

// var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
// 	template: __dirname + "/client/app/index.html",
// 	filename: 'index.html',
// 	inject: 'body'
// })

var config = {
	entry: path.resolve(APP_DIR, './index.jsx'),
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js',
		publicPath: 'build/'
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
		module: {
			rules: [
			{
				use: [{
					loader: 'babel-loader',
					options: { presets: ['airbnb', 'stage-1']},
			}],
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				// include: APP_DIR,
			},
		],
	},
	devServer: {
		contentBase: path.join(__dirname, 'build'),
		compress: true,
		port: 8080
	}
};

module.exports = config;