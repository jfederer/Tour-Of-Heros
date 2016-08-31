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
	}

	getHero(id:number) {
		return this.getHeroes()
			  .then(heroes =>
				  heroes.find(hero =>  // TODO: How does this work and why can't I put in curly braces?
					  hero.id === id
				  )
			  );
	}

}
