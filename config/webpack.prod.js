var merge = require('webpack-merge');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
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
            },
            // SASS that does not include components
            {
                test: /\.scss$/,
                include: helper.resolveRoot('src/assets/styles'),
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        new UglifyJsPlugin(),
        new ExtractTextPlugin('bundle.css')
    ]
});