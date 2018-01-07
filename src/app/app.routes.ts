import { Route } from '@angular/router';
import { IAppRouteStates } from './types/app.route';
import { NotFoundComponent } from './modules/shared/page-error/notfound.component';
import { ServerErrorComponent } from './modules/shared/page-error/server.error.component';
import { UnauthorizedComponent } from './modules/shared/page-error/unauthorized.component';

// #if global.lazyLoad.AboutModule === true
import { AboutLazyRoute } from './modules/about/setup/about.lazy.route';
// #endif

// #if global.lazyLoad.AboutModule !== true
import { AboutEarlyRoute } from './modules/about/setup/about.early.route';
// #endif

// #if global.lazyLoad.HomeModule === true
import { HomeLazyRoute } from './modules/home/setup/home.lazy.route';
// #endif

// #if global.lazyLoad.HomeModule !== true
import { HomeEarlyRoute } from './modules/home/setup/home.early.route';
// #endif

let homeRoute: Route = {};
let aboutRoute: Route = {};

// #if global.lazyLoad.HomeModule !== true
homeRoute = HomeEarlyRoute;
// #endif

// #if global.lazyLoad.HomeModule === true
homeRoute = HomeLazyRoute;
// #endif

// #if global.lazyLoad.AboutModule !== true
aboutRoute = AboutEarlyRoute;
// #endif

// #if global.lazyLoad.AboutModule === true
aboutRoute = AboutLazyRoute;
// #endif

export const AppRouteStates: IAppRouteStates = {
    index : {
        path : '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    about : aboutRoute,
    home : homeRoute,
    pageNotFound: {
        path: '**',
        component: NotFoundComponent
    },
    unauthorized: {
        path: 'unauthorized',
        component: UnauthorizedComponent
    },
    serverError: {
        path: 'server-error',
        component: ServerErrorComponent
    },
    pageUnfound: {
        path: 'page-not-found',
        component: NotFoundComponent
    }
};