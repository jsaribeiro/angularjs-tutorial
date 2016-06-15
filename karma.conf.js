'use strict';

var webpackConfig = require('./webpack.test.js');
webpackConfig.entry = {};

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ["Chrome"],
        plugins: [                  
            'karma-jasmine',
            'karma-webpack',
            'karma-firefox-launcher',
            'karma-chrome-launcher',
            'karma-opera-launcher',
            'karma-ie-launcher',
            'karma-safari-launcher'
        ],
        singleRun: true,
        autoWatchBatchDelay: 300,
        files: [
                "src/specs.ts"
        ],
        preprocessors: {   
          "src/specs.ts": ["webpack"]
        },
        webpackMiddleware: {
            stats: {
                chunkModules: false,
                colors: true
            }
        },
        webpack: webpackConfig
    });
};
