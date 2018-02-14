import { Routes } from '@angular/router';
import * as lodash from 'lodash';
import { HomeComponent } from '../home.component';
import { HomeChildRoute } from './home.child.route';

const earlyRoute: Routes = [{
    path: 'home',
    component: HomeComponent
}];

export const HomeEarlyRoute = lodash.merge(earlyRoute[0], HomeChildRoute[0]); 