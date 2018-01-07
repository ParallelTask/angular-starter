import { Routes } from '@angular/router';
import { lodash } from '../../../extensions/ext.module';
import { HomeComponent } from '../home.component';
import { HomeChildRoute } from './home.child.route';

const lazyRoute: Routes = [{
    path: '',
    component: HomeComponent
}];

export const HomeLazyRouterRoute = lodash.merge(lazyRoute, HomeChildRoute); 