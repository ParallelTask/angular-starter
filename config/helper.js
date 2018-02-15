/** 
 * helper functions useful in webpack compilation process
 */
var path = require('path');
var start = require('./start');

var constants = {
    prod: 'PRODUCTION',
    uat: 'UAT',
    dev: 'DEV'
}

var enviroment = {
    isProd: function() {
        return process.env.ENV_SERVER === constants.prod ? true : false;
    },
    isUAT: function() {
        return process.env.ENV_SERVER === constants.uat ? true : false;
    },
    isDev: function() {
        return (enviroment.isProd() && enviroment.isUAT()) === false;
    }
}

/*
 * returns rootdirectory of project
 */
function basedir() {
    return path.join(__dirname, '../');
}

/*
 * resolves the given path or file from rootpath
 */
function resolveRoot(_path) {
    return path.join(basedir(), _path);
}

module.exports = {
    basedir: basedir,
    resolveRoot: resolveRoot,
    PROD: enviroment.isProd(),
    UAT: enviroment.isUAT(),
    DEV: enviroment.isDev()
}