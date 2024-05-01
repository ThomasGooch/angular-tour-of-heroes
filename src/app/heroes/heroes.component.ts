import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  heroes: Hero[] = [];

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  selectedHero?: Hero;
  
  onSelect(hero: Hero): void {
  this.selectedHero = hero;
}

  // hero: Hero = {id: 1, name: 'Windstorm'};
}
