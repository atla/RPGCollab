import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { HeroService }     from './hero.service';
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [
    HeroService
  ]
})
export class AppComponent {
  title = 'Tour of Heroes';

 constructor(private router: Router,
              private heroService: HeroService) { }

  createProject () {
      let link = ['/createProject'];
      this.router.navigate(link);
  }
}
