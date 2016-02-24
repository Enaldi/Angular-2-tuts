import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Hero } from './hero-interface';
import { HeroService } from './hero.service';

@Component({
	selector: 'my-dashboard',
	templateUrl: '/app/templates/dashboard.component.html'
})
export class DashboardComponent implements OnInit {
	heroes: Hero[] = [];

	constructor(
		private _router: Router,
		private _heroService: HeroService) { }

	ngOnInit() {
		this._heroService.getHeroes()
			.then(heroes => this.heroes = heroes.slice(1, 5));
	}

	gotoDetail(hero: Hero) { // Called on click of hero on dashboard
		let link = ['HeroDetail', { id: hero.id }]; // Link parameters => Called on click of Hero on dashboard -- Note it passes in the id.
		this._router.navigate(link); // Pass array to router's navigate method ==> Triggers the route (in app.components) for this hero.
	}
}
