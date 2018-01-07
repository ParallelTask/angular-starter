import { Routes } from '@angular/router';

const lazyRoute: Routes = [{
    path: 'about',
    loadChildren: '../about.module#AboutModule'
}];

export const AboutLazyRoute = lazyRoute[0];