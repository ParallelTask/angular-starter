import { Routes } from '@angular/router';
import { lodash } from '../../../extensions/ext.module';
import { AboutComponent } from '../about.component';
import { AboutChildRoute } from './about.child.route';

const lazyRoute: Routes = [{
    path: '',
    component: AboutComponent
}];

export const AboutLazyRouterRoute = lodash.merge(lazyRoute, AboutChildRoute); 