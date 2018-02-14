import { Route } from '@angular/router';

export interface IAppRouteStates {
    index?: Route,
    home?: Route,
    about?: Route,
    pageNotFound?: Route,
    unauthorized?: Route,
    serverError?: Route,
    pageUnfound?: Route
}