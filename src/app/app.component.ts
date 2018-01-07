import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { AppRouteStates } from './app.routes';
import { AppRouterModule } from './app.router.module';

@Component({
  selector: 'pt-hacker-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    let routeStates: Routes = [];

    // dynamically set the routes
    routeStates.push(AppRouteStates.index);
    routeStates.push(AppRouteStates.home);
    routeStates.push(AppRouteStates.about);
    routeStates.push(AppRouteStates.pageUnfound);
    routeStates.push(AppRouteStates.serverError);
    routeStates.push(AppRouteStates.unauthorized);
    
    // must be the last route to be pushed
    routeStates.push(AppRouteStates.pageNotFound);

    this.router.resetConfig(routeStates);
  }
}