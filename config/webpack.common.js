var Webpack = require("webpack");
var merge = require('webpack-merge');
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var helper = require("./helper")
var buildConfig = require('./webpack.build');
var pkgs = require('./webpack.pkgs');

var pkgsLoader = (function() {
    switch (buildConfig.externalLoader) {
        case 'local':
            return pkgs.local;
        case 'cdn':
            return pkgs.cdn;
        case 'bundle':
            return {};
    };
    return {};
})();

var cssBundler = (function() {
    if (buildConfig.externalLoader === 'bundle') {
        return {
            test: /\.css$/,
            include: helper.resolveRoot('node_modules'),
            use: ExtractTextPlugin.extract({
                use: 'css-loader'
            })
        }
    }
    return {};
})();


module.exports = merge(pkgsLoader, {
    entry: {
        vendor: helper.resolveRoot('src/vendor.ts'),
        polyfill: helper.resolveRoot('src/polyfill.ts'),
        main: helper.resolveRoot('src/main.ts')
    },
    resolve: {
        // tells webpack to automaticlly resolve extensions
        // for example: import * from 'my-component'
        // no need to specify the .ts extension
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            cssBundler,
            {
                // awesome-typescript-loader - used to transpile ts to js.
                // angular2-template-loader - used to replace temaplteUrl and styleUrls in component metadata 
                //                           to inline template and styles with require statements.
                test: /\.ts$/,
                use: [{
                        loader: 'awesome-typescript-loader',
                        options: {
                            configFileName: helper.resolveRoot('src')
                        },
                    },
                    'angular-router-loader',
                    'angular2-template-loader',
                    'webpack-conditional-loader'
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[ext]'
                    }
                }]
            },
            {
                test: /\.html$/,
                // see https://github.com/kangax/html-minifier#options-quick-reference
                use: [{
                    loader: 'html-loader',
                    options: {
                        caseSensitive: true,
                        removeAttributeQuotes: false,
                    }
                }]
            },
            // SASS that does not include components
            {
                test: /\.scss$/,
                include: helper.resolveRoot('src/assets/styles'),
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!sass-loader",
                })
            }
        ]
    },
    plugins: [
        new Webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: true
        }),
        new ExtractTextPlugin("bundle.css"),
        new Webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)/,
            helper.resolveRoot('src'), // location of your src
            {}
        ),
        new Webpack.optimize.CommonsChunkPlugin({
            name: ['main', 'vendor', 'polyfill']
        }),
        new CopyWebpackPlugin([{
            from: 'src/assets',
            to: 'assets',
            ignore: ['*.scss']
        }])
    ]
});