import {Component} from 'angular2/core';
import {Hero} from './hero-interface';

@Component({
	selector: 'my-hero-detail',
	inputs: ['hero'],
	template: `
				<div *ngIf="hero">
					<h2>{{hero.name}} details:</h2>
					<div><label>id: </label>{{hero.id}}</div>
					<div>
						<label>name: </label>
						<input [(ngModel)]="hero.name" placeholder="name">
					</div>
				</div>
	`
})
export class HeroDetailComponent {
	hero: Hero; // This just types the param (hero is really set as an input in this component -- see above)
}