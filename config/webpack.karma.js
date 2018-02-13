var Webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [{
                test: /\.ts$/,
                use: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.scss$/,
                use: ['to-string-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap']
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
            }
        ]
    },
    plugins: [
        new Webpack.NoEmitOnErrorsPlugin()
    ]
};
