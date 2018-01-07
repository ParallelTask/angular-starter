var merge = require('webpack-merge');
var common = require('./webpack.common');
var helper = require('./helper');

module.exports = merge(common, {
    devtool: 'inline-source-map',
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
            // SASS that includes angular components
            {
                test: /\.scss$/,
                include: helper.resolveRoot('src/app'),
                use: ['raw-loader', {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }]
            }
        ]
    },
    plugins: []
})