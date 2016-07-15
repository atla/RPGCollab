import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Project } from './project';
import { ProjectService } from './project.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html'
  /*,
  styleUrls: ['app/dashboard.component.css']*/
})

export class DashboardComponent implements OnInit {
  projects: Project[] = [];
  constructor(private router: Router,
              private ProjectService: ProjectService) { }  
  ngOnInit() {
    this.ProjectService.getProjects()
      .then(projects => this.projects = projects);
  }

  gotoDetail(project: Project) {
    let link = ['/detail', project._id];
    this.router.navigate(link);
  }
}
