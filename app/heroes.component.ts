import { Component, OnInit } from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {Router} from '@angular/router';

@Component({
	selector: 'my-heroes',
	templateUrl: 'app/heroes.component.html',
	styleUrls:['app/heroes.component.css']
})
export class HeroesComponent implements OnInit {
	constructor(
				private heroService: HeroService,
				private router: Router) { }

	heroes : Hero[];
	selectedHero:Hero;


	getHeroes(): void {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	onSelect(hero:Hero):void {
		this.selectedHero = hero;
	}

	ngOnInit(): void {
		this.getHeroes();
	}

	gotoDetail(hero:Hero):void {
		let link = ['/detail', this.selectedHero.id];
 		this.router.navigate(link);
	};

	add(name: string): void {
		name = name.trim();
		if (!name) {
			return;
		}
		this.heroService.create(name)
			.then(hero => {
				this.heroes.push(hero);
				this.selectedHero = null;
			});
	}

	delete(hero: Hero): void {
		this.heroService
			.delete(hero.id)
			.then(() => {
				this.heroes = this.heroes.filter(h => h !== hero);
				if (this.selectedHero === hero) {
					this.selectedHero = null;
				}
		});
	}

}
