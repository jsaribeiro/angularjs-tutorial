var webpack = require('webpack');
var path    = require('path');

module.exports = {
	//entry: ['./src/index.ts'],
    output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'tmp'),
	},
	resolve: {
	    root: __dirname,
	    extensions: ['', '.ts', '.js', '.json']
	  },
    resolveLoader: {
        modulesDirectories: ["node_modules"]
    },
    devtool: "inline-source-map",
    module: {
        loaders: [
                  { test: /\.ts$/,   loader: 'ts-loader' },
                  { test: /\.css$/,  loaders: ['style', 'css'] },
		          { test: /\.jpg$/i, loader: "file-loader?name=img/img-[hash:6].[ext]" }
        ]
    }
};
