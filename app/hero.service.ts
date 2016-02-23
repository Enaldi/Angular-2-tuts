import {HEROES} from './mock-heroes'; // Import data
import {Injectable} from 'angular2/core';

@Injectable() // This decorator allows you to inject dependencies as needed
export class HeroService {
	getHeroes() {
		return Promise.resolve(HEROES);
	}
}