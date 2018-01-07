import { Routes } from '@angular/router';

const lazyRoute: Routes = [{
    path: 'home',
    loadChildren: '../home.module#HomeModule'
}];

export const HomeLazyRoute = lazyRoute[0];