import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProjectService } from "../projects/project.service";
import { Project } from "../projects/project";

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

project: Project;

  constructor(private service:ProjectService,
              private route:ActivatedRoute) {  }

   ngOnInit() {
    this.route.params
      // (+) converts string 'id' to a number
      .switchMap((params: Params) => this.service.getProject(params['id']))
      .subscribe((project: Project) => this.project = project);
  }
}
