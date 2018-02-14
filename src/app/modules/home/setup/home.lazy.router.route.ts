import { Routes } from '@angular/router';
import * as lodash from 'lodash';
import { HomeComponent } from '../home.component';
import { HomeChildRoute } from './home.child.route';

const lazyRoute: Routes = [{
    path: '',
    component: HomeComponent
}];

export const HomeLazyRouterRoute = lodash.merge(lazyRoute, HomeChildRoute); 