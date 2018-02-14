import { Routes } from '@angular/router';
import * as lodash from 'lodash';
import { AboutComponent } from '../about.component';
import { AboutChildRoute } from './about.child.route';

const lazyRoute: Routes = [{
    path: '',
    component: AboutComponent
}];

export const AboutLazyRouterRoute = lodash.merge(lazyRoute, AboutChildRoute); 