import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService} from './hero.service'
import { OnInit } from '@angular/core';
import { DashboardComponent } from './dashboard.component'
import { Router } from '@angular/router';

@Component({
  selector: 'my-heroes',
  styleUrls: ['app/heroes.component.css'],
  templateUrl: 'app/heroes.component.html',

})



export class HeroesComponent implements OnInit {
constructor(
  private router: Router,
  private heroService: HeroService) { }
heroes : Hero[]
selectedHero: Hero;
onSelect(hero: Hero): void {
    this.selectedHero = hero;
}
getHeroes(): void {
  this.heroService.getHeroes().then(heroes => this.heroes = heroes);
}
ngOnInit():void {
    this.getHeroes();
}

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
  add(name: string): void {
  name = name.trim();
  if (!name) { return; }
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
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
}
}