var HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');

module.exports = {
    // if localfiles? specify paths
    local: {
        plugins: [
            new HtmlWebpackIncludeAssetsPlugin({
                assets: ['assets/styles/bootstrap/bootstrap.min.css'],
                append: false
            }),
            new CopyWebpackPlugin([
                { from: 'node_modules/bootstrap/dist/css/bootstrap.min.css', to: 'assets/styles/bootstrap' },
                { from: 'node_modules/bootstrap/dist/fonts', to: 'assets/styles/bootstrap/fonts' }
            ])
        ]
    },
    // if cdn? configure cdn paths
    cdn: {
        plugins: [
            new HtmlWebpackExternalsPlugin({
                externals: [{
                    module: 'bootstrap',
                    entry: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'
                }]
            })
        ]
    }
}