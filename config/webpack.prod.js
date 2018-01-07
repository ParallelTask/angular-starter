var merge = require('webpack-merge');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin')
var common = require('./webpack.common');
var helper = require('./helper');

module.exports = merge(common, {
    output: {
        filename: '[name].bundle.js',
        chunkFilename: 'chunks/[name].chunk.js',
        path: helper.resolveRoot('public'),
        publicPath: '/'
    },
    module: {
        rules: [
            // SASS which include in components
            {
                test: /\.scss$/,
                include: helper.resolveRoot('src/app'),
                use: ['to-string-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new UglifyJsPlugin()
    ]
});