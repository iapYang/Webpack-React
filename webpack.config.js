var path = require('path');
var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var CopyWebpackPlugin = require('copy-webpack-plugin');

var dir_dev = './dev';


module.exports = {
    entry: path.resolve(dir_dev, 'index.jsx'),
    output: {
        path: './dist',
        filename: 'bundle.js',
        publicPath: '/assets/',
    },
    devServer: {
        inline: true,
        port: 10000,
    },
    devtool: 'source-map',
    plugins: [
        new CopyWebpackPlugin([{
            // from: './dev/index.html'
        }, ], {
            ignore: [

            ],

            // By default, we only copy modified files during
            // a watch or webpack-dev-server build. Setting this
            // to `true` copies all files.
            // copyUnmodified: true
        }),
    ],
    module: {
        loaders: [{
            test: /\.css$/,
            loaders: [
                'style-loader',
                'css-loader?modules&importLoaders=1',
                'postcss-loader',
            ],
        }, {
            test: /\.(js|jsx)$/,
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
