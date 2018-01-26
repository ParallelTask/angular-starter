let webpackKarmaConfig = require('./webpack.karma.conf');

module.exports = function(config) {
    config.set({
        basePath: '../',
        frameworks: ['jasmine'],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-webpack'),
            require('karma-sourcemap-loader'),
            require('karma-html-detailed-reporter')
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
        reporters: ['htmlDetailed', 'kjhtml'],
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
        concurrency: Infinity,
        htmlDetailed: {
            splitResults: false,
            dir: './unit_tests_report',
            autoReload: false
        }
    });
}