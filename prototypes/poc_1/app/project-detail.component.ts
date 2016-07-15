import {Component, EventEmitter, OnInit, OnDestroy, Input, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Project} from './project';
import {ProjectService} from './project.service';


@Component({
  selector: 'project-detail',
  templateUrl: 'app/project-detail.component.html'
})

export class ProjectDetailComponent implements OnInit, OnDestroy {

  @Input() project: Project;
  @Output() close = new EventEmitter();
  error: any;
  sub: any;
  navigated = false;

  constructor(private ProjectService: ProjectService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        let id: string = params['id'];
        this.navigated = true;
        this.ProjectService.getProject(id)
          .then(project => this.project = project);
      } else {
        this.navigated = false;
        this.project = new Project();
      }
    });
  }

  save() {
    this.ProjectService
      .save(this.project)
      .then(project => {
        this.project = project;
        this.goBack(project);
      })
      .catch(error => this.error = error);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  goBack(savedProject: Project = null) {
    this.close.emit(savedProject);
    if (this.navigated) {
      window.history.back();
    }
  }
}
