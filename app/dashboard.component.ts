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

	gotoDetail(hero: Hero) { 
		let link = ['HeroDetail', { id: hero.id }]; // Link parameters => as if this link were clicked -- Note it passes in the id.
		this._router.navigate(link); // Pass array to router's navigate method
	}
}
