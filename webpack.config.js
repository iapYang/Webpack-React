var dir_dev = './test';

module.exports = {
    entry: "./test/entry.js",
    output: {
        path: "./test",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: "style!css"
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_module/,
            query: {
                presets: ['es2015']
            },
        }, {
            test: /\.scss$/,
            loaders: ["style-loader", "css-loader", "sass-loader"],
        }, ],
    }
};
