import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { ProjectService }     from './project.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ProjectService
  ]
})

export class AppComponent {
  title = 'RPG Collab';

 constructor(private router: Router,
              private projectService: ProjectService) { }

  createProject () {
      let link = ['/createProject'];
      this.router.navigate(link);
  }
}
