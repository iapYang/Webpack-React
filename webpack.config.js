var path = require('path');

var dir_dev = './test';


module.exports = {
    entry: './test/entry.js',
    output: {
        path: './test',
        filename: 'bundle.js'
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
                'sass-loader?sourceMap'
            ],
        }],
    }
};
