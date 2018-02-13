// Import most commmonly used modules, such that these modules can be cached in vendor.ts
import '@angular/core';
import '@angular/common';
import '@angular/forms';
import '@angular/common/http';
import '@angular/router';
// Dont just import all modules that increases bundle size
// import '@angular/platform-browser-dynamic';
// import '@angular/animations';

// import the modules that cannot be imported by individual modules
// lodash, momemt cannot be loaded by modules
// However primeng, rxjs can be loaded by modules
// import 'rxjs';
import 'moment';
import 'lodash';
// import 'primeng/primeng';
import 'immutable';

// Global style
import './assets/styles/custom.scss';

// Import external bundles ex: bootstrap, font-awesome
// To import externals, set "externalLoader": "bundle" in webpack.build.config.js
// When "externalLoader" : "cdn | local", comment out the external imports
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';