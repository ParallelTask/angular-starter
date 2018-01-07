/* 
 * put starter code here
 * configure Node global object to lazy load modules in angular
 * following configuration helps in conditional importing via webpack bundling
 */
global.lazyLoad = {
    HomeModule: false,
    AboutModule: true
};

module.exports = {};