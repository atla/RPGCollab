import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HeroDetailComponent} from './hero-detail.component';
import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
  selector: 'my-heroes',
  providers: [HeroService],
  styleUrls: ['app/heroes.component.css'],
  directives: [HeroDetailComponent],
  templateUrl: 'app/heroes.component.html'
})

export class HeroesComponent implements OnInit {
  public heroes:Hero[];
  public selectedHero:Hero;

  private addingHero:boolean;
  private error:any;

  title = 'Tour of Heroes';

  constructor(private router:Router,
              private heroService:HeroService) {

  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero:Hero) {
    this.selectedHero = hero;
  }

  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  addHero() {
    this.addingHero = true;
    this.selectedHero = null;
  }

  deleteHero(hero: Hero, event: any) {
    event.stopPropagation();
    this.heroService
      .delete(hero)
      .then(res => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      })
      .catch(error => this.error = error);
  }

  close(savedHero: Hero) {
    this.addingHero = false;
    if (savedHero) { this.getHeroes(); }
  }

  gotoDetail(hero: Hero) {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}

