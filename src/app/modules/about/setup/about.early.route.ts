import { Routes } from '@angular/router';
import * as lodash from 'lodash';
import { AboutComponent } from '../about.component';
import { AboutChildRoute } from './about.child.route';

const earlyRoute: Routes = [{
    path: 'about',
    component: AboutComponent
}];

export const AboutEarlyRoute = lodash.merge(earlyRoute[0], AboutChildRoute[0]); 