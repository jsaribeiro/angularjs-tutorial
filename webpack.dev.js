var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:3333/',
		'webpack/hot/dev-server',
		'./src/index.ts'
	],
	resolve: {
		extensions: ['.ts', '.js', '.tsx', '.jsx', '']
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				loader: 'ts-loader'
			},
			{ test: /\.css$/,  loaders: ['style', 'css'] },
			{ test: /\.jpg$/i, loader: "file-loader?name=img/img-[hash:6].[ext]" }
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false
			}
		}),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	],
	devServer: {
		contentBase: 'dist',
		port: 3333,
		hot: true
	}
}
