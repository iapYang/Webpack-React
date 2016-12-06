var path = require('path');
var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");

var dir_dev = './dev';


module.exports = {
    entry: path.resolve(dir_dev, 'component/index.js'),
    output: {
        path: './dist',
        filename: 'bundle.js',
    },
    devServer: {
        inline: true,
        port: 10000,
    },
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.css$/,
            loaders: [
                'style-loader',
                'css-loader?modules&importLoaders=1',
                'postcss-loader',
            ],
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_module/,
            query: {
                presets: ['es2015']
            },
        }, {
            test: /\.scss$/,
            loaders: [
                'style-loader',
                'css-loader?sourceMap',
                'postcss-loader',
                'sass-loader?sourceMap'
            ],
        }],
    }
};
