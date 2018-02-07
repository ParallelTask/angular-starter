import { NgModule, ModuleWithProviders, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home.component';
import { HomeProviders } from './home.providers';

// #if global.lazyLoad.HomeModule === true
import { HomeLazyRouterRoute } from './home.lazy.router.route';
// #endif

let imports: Array<Type<any> | ModuleWithProviders | any[]> = [
    CommonModule
    , HttpClientModule

    // #if global.lazyLoad.HomeModule === true
    , RouterModule.forChild(HomeLazyRouterRoute)
    // #endif
];

export const HomeConfig: NgModule = {
    imports: imports,
    declarations: [
        HomeComponent
    ],
    exports: [
        HomeComponent
    ],
    providers: []
};
