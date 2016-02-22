import {Component} from 'angular2/core';

interface Hero { // Use interface (instead of class) if you only need type checking -- is lighterweight.
	id: number;
	name: string;
}


//
// App component
//
@Component({
    selector: 	'my-app',
    template:	`
    			<h1>{{title}}</h1>

    			<h2>My Heroes</h2>
				<ul class="heroes">
				  <li *ngFor="#hero of heroes" 
					[class.selected]="hero === selectedHero"
				  	(click)="onSelect(hero)"> 
				    <span class="badge">{{hero.id}}</span> {{hero.name}}
				  </li>
				</ul>


				<div *ngIf="selectedHero">
					<h2>{{selectedHero.name}} details:</h2>
					<div><label>id: </label>{{selectedHero.id}}</div>
					<div>
						<label>name: </label>
						<input [(ngModel)]="selectedHero.name" placeholder="name">
					</div>
				</div>
    			`,
	styles: [`
			  .selected {
			    background-color: #CFD8DC !important;
			    color: white;
			  }
			  .heroes {
			    margin: 0 0 2em 0;
			    list-style-type: none;
			    padding: 0;
			    width: 10em;
			  }
			  .heroes li {
			    cursor: pointer;
			    position: relative;
			    left: 0;
			    background-color: #EEE;
			    margin: .5em;
			    padding: .3em 0em;
			    height: 1.6em;
			    border-radius: 4px;
			  }
			  .heroes li.selected:hover {
			    color: white;
			  }
			  .heroes li:hover {
			    color: #607D8B;
			    background-color: #EEE;
			    left: .1em;
			  }
			  .heroes .text {
			    position: relative;
			    top: -3px;
			  }
			  .heroes .badge {
			    display: inline-block;
			    font-size: small;
			    color: white;
			    padding: 0.8em 0.7em 0em 0.7em;
			    background-color: #607D8B;
			    line-height: 1em;
			    position: relative;
			    left: -1px;
			    top: -4px;
			    height: 1.8em;
			    margin-right: .8em;
			    border-radius: 4px 0px 0px 4px;
			  }
			`]
})
export class AppComponent {
	public title = "Tour of Heros";
	public selectedHero: Hero;
	public heroes = HEROES;

	onSelect(hero: Hero) { this.selectedHero = hero };
}


//
// Data
//
var HEROES: Hero[] = [ // Array of type Hero
	{ "id": 11, "name": "Skronk" },
	{ "id": 12, "name": "Scscla" },
	{ "id": 13, "name": "Stinky" },
	{ "id": 14, "name": "Earlthecat" },
	{ "id": 15, "name": "Earlthecatwo" },
	{ "id": 16, "name": "Enaldie" },
	{ "id": 17, "name": "Megis" },
	{ "id": 18, "name": "Bigbut" },
	{ "id": 19, "name": "Chelan" },
	{ "id": 20, "name": "Mr. Wiggles" }
];


