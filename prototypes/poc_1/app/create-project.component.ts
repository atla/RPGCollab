import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'create-project',
  templateUrl: 'app/create-project.component.html',
  styleUrls: ['app/dashboard.component.css']
})

export class CreateProjectComponent implements OnInit {
//  heroes: Hero[] = [];
  constructor(private router: Router,
              private heroService: HeroService) { }

  ngOnInit() {
   // this.heroService.getHeroes()
     // .then(heroes => this.heroes = heroes.slice(0, 3));
  }

  gotoDetail(hero: Hero) {
   // let link = ['/detail', hero.id];
   // this.router.navigate(link);
  }
}
