import {Component. OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Hero} from './hero-interface';
import {HeroService} from './hero.service';


@Component({
	selector: 'my-hero-detail',
	inputs: ['hero'],
	templateUrl: '/app/templates/hero-detail.component.html'
})
export class HeroDetailComponent {

	hero: Hero; // This just types the param (hero is really set as an input in this component -- see above)

	constructor(
		private _heroService: HeroService,
		private _routeParams: RouteParams) {
	}

	ngOnInit() {
		let id = +this._routeParams.get('id'); // + converts string to number
		this._heroService.getHero(id)
			.then(hero => this.hero = hero);
	}

	goBack() {
		window.history.back();
	}

}