var merge = require('webpack-merge');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var common = require('./webpack.common');
var helper = require('./helper');

module.exports = merge(common, {
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: 'chunks/[name].chunk.js',
        path: helper.resolveRoot('dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            // SASS which include in components
            {
                test: /\.scss$/,
                include: helper.resolveRoot('src/app'),
                use: ['to-string-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap']
            },
            // SASS that does not include components
            {
                test: /\.scss$/,
                include: helper.resolveRoot('src/assets/styles'),
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader?sourceMap',
                    use: ['css-loader?sourceMap', 'sass-loader?sourceMap']
                })
            }
        ]
    },
    plugins: [
        // Using UglifyJs creates slower loads, ignore for dev build
        // new UglifyJsPlugin({
        //     sourceMap: true
        // }),
        new ExtractTextPlugin('bundle.css')
    ]
});