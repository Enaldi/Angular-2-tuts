import {Component, OnInit} from 'angular2/core';
import { Router } from 'angular2/router';
import {Hero} from './hero-interface';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';

//
// App component
//
@Component({
    selector: 	'my-heroes',
    templateUrl: '/app/templates/heroes.component.html',
	styleUrls: ['app/styles/heroes.component.css'],
	directives: [HeroDetailComponent]
	// No HeroService provider here b/c has been PROMOTED to app.components.
})
export class HeroesComponent implements OnInit {

	public title = "Tour of Heros";
	public heroes: Hero[];
	public selectedHero: Hero;

	constructor(
		private _router: Router,
		private _heroService: HeroService
		) { } // Construct data service => supply the fresh instance of the service when Appcomponent created

	getHeroes() {
		this._heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	ngOnInit() { // Call on init instead of within constructor -- reserve constructor for very simple logic
		this.getHeroes();
	}

	onSelect(hero: Hero) { 
		// console.log(`onSelect() fired - hero: ${hero.name}`);
		this.selectedHero = hero;
	}

	gotoDetail() { // On click
		this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
	}

}