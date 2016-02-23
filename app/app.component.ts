// This is designed to be a shell app that only handles routing => is attached to a router and displays routed views.

import { Component } from 'angular2/core';
import { HeroService } from './hero.service';
import { HeroesComponent } from './heroes.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@RouteConfig([
  {
    path: '/heroes',
    name: 'Heroes', // Name of the route. MUST begin with capital letter.
    component: HeroesComponent // Component created when navigating to the route
  }
])
@Component({
  selector: 'my-app',
  template: `
      <h1>{{title}}</h1>
      <a [routerLink]="['Heroes']">Heroes</a>
      <router-outlet></router-outlet>
  `,
  directives: [
      ROUTER_DIRECTIVES
  ], 
  providers: [
    ROUTER_PROVIDERS,
    HeroService, // Add to providers array b/c is used in every view. Service is PROMOTED to this component by HeroesComponent.
    // All services must be part of the providers array.
    // BE CAREFUL REGISTERING PROVIDERS: Only do when a new instance needed (not when u want to share a parent's instance)
  ]
})
export class AppComponent {
  title = 'Tour of Heroes';
}
// In template, note:
// We define a routing instruction with a link parameters array.