import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {


	getHeroes(): Promise<Hero[]> {
		var prom : Promise<Hero[]> = new Promise( (resolve)=> {
			setTimeout(() => {
				resolve(HEROES);
			},750);
		});
		return prom;

		//
		// return new Promise<Hero[]>(resolve =>
	    //   setTimeout(resolve, 2000)) // delay 2 seconds
	    //   .then(() => this.getHeroes());
	// 	return Promise.resolve(HEROES);
	}
}
