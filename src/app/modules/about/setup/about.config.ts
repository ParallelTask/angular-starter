import { NgModule, ModuleWithProviders, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AboutComponent } from '../about.component';
import { AboutProviders } from './about.providers';

// #if global.lazyLoad.AboutModule === true
import { AboutLazyRouterRoute } from './about.lazy.router.route';
// #endif

let imports: Array<Type<any> | ModuleWithProviders | any[]> = [
    CommonModule
    , HttpClientModule

    // #if global.lazyLoad.AboutModule === true
    , RouterModule.forChild(AboutLazyRouterRoute)
    // #endif
];

export const AboutConfig: NgModule = {
    imports: imports,
    declarations: [
        AboutComponent
    ],
    exports: [
        AboutComponent
    ],
    providers: [
        AboutProviders.IAboutService
    ]
};
