import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { ProjectService } from "./project.service";
import { Project } from "./project"
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsOverviewComponent {
  projects: Project[];

  constructor(private projectService: ProjectService, private router:Router) { }

  ngOnInit() {
    this.projectService.getProjects().subscribe(p => this.projects = p);
  }


   onSelect(project: Project) {
    this.router.navigate(['/project', project._id]);
  }
}