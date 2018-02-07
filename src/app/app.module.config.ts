import { Provider, ModuleWithProviders, Type, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UtilityModule } from './core/utility/utility.module';
import { ConfigurationModule } from './core/configuration/configuration.module';
import { CoreModule } from './modules/core/core.module';
import { AppRouterModule } from './app.router.module';
import { SharedModule } from './modules/shared/shared.module';
import { HttpInterceptorModule } from './core/interceptors/http.interceptor.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './modules/shared/page-error/notfound.component';
import { ServerErrorComponent } from './modules/shared/page-error/server.error.component';
import { UnauthorizedComponent } from './modules/shared/page-error/unauthorized.component';

// #if global.lazyLoad.HomeModule !== true
import { HomeModule } from './modules/home/home.module';
import { HomeComponent } from './modules/home/home.component';
// #endif

// #if global.lazyLoad.AboutModule !== true
import { AboutModule } from './modules/about/about.module';
import { AboutComponent } from './modules/about/about.component';
// #endif

let imports: Array<Type<any> | ModuleWithProviders | any[]> = [
    BrowserModule
    , AppRouterModule
    , HttpInterceptorModule
    , ConfigurationModule
    , UtilityModule
    , CoreModule
    , SharedModule

    // #if global.lazyLoad.HomeModule !== true
    , HomeModule
    // #endif

    // #if global.lazyLoad.AboutModule !== true
    , AboutModule
    // #endif
];

export const AppModuleConfig: NgModule = {
    declarations: [AppComponent],
    imports: imports,
    bootstrap: [AppComponent],
    entryComponents: [
        NotFoundComponent
        , ServerErrorComponent
        , UnauthorizedComponent

        // #if global.lazyLoad.HomeModule !== true
        , HomeComponent
        // #endif

        // #if global.lazyLoad.AboutModule !== true
        , AboutComponent
        // #endif
    ]
};
