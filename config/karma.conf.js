let webpackKarmaConfig = require('./webpack.karma');

module.exports = function(config) {
    config.set({
        basePath: '../',
        frameworks: ['jasmine'],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-webpack'),
            require('karma-sourcemap-loader')
        ],
        mime: {
            'text/x-typescript': ['ts']
        },
        files: ['config/karma.entry.js'],
        webpack: webpackKarmaConfig,
        webpackServer: {
            noInfo: true
        },
        preprocessors: {
            'config/karma.entry.js': ['webpack', 'sourcemap']
        },
        reporters: ['kjhtml'],
        browsers: ['Chrome'],
        client: {
            clearContext: false,
            captureConsole: false
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_WARN,
        autoWatch: true,
        singleRun: false,
        concurrency: Infinity
    });
}