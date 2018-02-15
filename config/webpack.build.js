/*
 * Webpack builds configuration files
 * use double-quotes for keys to treat as plain json configuration
 */

module.exports = {
    // externalLoader is the property that is used to configure on how to load external dependencies
    // like bootstrap, jquery ..
    // Selecting "bundle" bundles the depenencies from local storage as specified in webpack.pkgs.js
    // You can even configure to load the dependencies, all such can links can be provided in webpack.pkgs.js
    "externalLoader": "bundle" // possibles values cdn | local | bundle
}