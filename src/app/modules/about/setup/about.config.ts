import { NgModule, ModuleWithProviders, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutComponent } from '../about.component';
import { AboutProviders } from './about.providers';
// Added to test observables working
import { ObservablesModule } from '../../../../lib/observables/observables.module';

// #if global.lazyLoad.AboutModule === true
import { AboutLazyRouterRoute } from './about.lazy.router.route';
// #endif

let imports: Array<Type<any> | ModuleWithProviders | any[]> = [
    CommonModule
    , ObservablesModule

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
