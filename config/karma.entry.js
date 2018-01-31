require('core-js/client/shim');
require('core-js/es6');
require('core-js/es7/reflect');
require('zone.js/dist/zone');
require('zone.js/dist/long-stack-trace-zone');
require('zone.js/dist/proxy');
require('zone.js/dist/sync-test');
require('zone.js/dist/jasmine-patch');
require('zone.js/dist/async-test');
require('zone.js/dist/fake-async-test');
require('rxjs/Rx');

const coreTesting = require('@angular/core/testing');
const browserTesting = require('@angular/platform-browser-dynamic/testing');

coreTesting.TestBed.resetTestEnvironment();
coreTesting.TestBed.initTestEnvironment(
    browserTesting.BrowserDynamicTestingModule,
    browserTesting.platformBrowserDynamicTesting()
);

// Refer: https://stackoverflow.com/questions/27332227/suppress-the-stack-trace-in-karma-angularjs
Error.stackTraceLimit = 0;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 4000;

const context = require.context('../src/tests/', true, /\.spec\.ts$/);

/*
 * get all the files, for each file, call the context function
 * that will require the file and load it up here.
 */
context.keys().forEach(context);