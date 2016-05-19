var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	     entry: ['./src/index.ts'],
		 resolve: {
			    extensions: ['.ts', '.js', '.tsx', '.jsx', '']
			  },
		output: {
			path: path.join(__dirname, 'dist'),
			filename: 'bundle.js'
		},
		module: {
			loaders: [
			          { test: /\.ts$/,   loader: 'ts-loader' },
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
		          new HtmlWebpackPlugin({
                      template: './src/index.html'
		          })
		]
}
