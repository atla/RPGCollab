import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProjectDetailComponent} from './project-detail.component';
import {Project} from './project';
import {ProjectService} from './project.service';

@Component({
  selector: 'my-projects',
  providers: [ProjectService],
  directives: [ProjectDetailComponent],
  templateUrl: 'app/projects.component.html'
})

export class ProjectsComponent implements OnInit {
  public projects: Project[];
  public selectedProject: Project;
  private addingProject: boolean;
  private error: any;

  constructor(private router: Router,
              private ProjectService: ProjectService) {

  }

  ngOnInit() {
    this.getProjects();
  }

  onSelect(project: Project) {
    this.selectedProject = project;
  }

  getProjects() {
    this.ProjectService.getProjects().then(projects => this.projects = projects);
  }

  addProject() {
    this.addingProject = true;
    this.selectedProject = null;
  }

  deleteProject(project: Project, event: any) {
    event.stopPropagation();
    this.ProjectService
      .delete(project)
      .then(res => {
        this.projects = this.projects.filter(h => h !== project);
        if (this.selectedProject === project) { this.selectedProject = null; }
      })
      .catch(error => this.error = error);
  }

  close(project: Project) {
    this.addingProject = false;
    if (project) { this.getProjects(); }
  }

  gotoDetail(project: Project) {
    let link = ['/detail', project._id];
    this.router.navigate(link);
  }
}

