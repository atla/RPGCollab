import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ProjectService } from './project.service';
import { Project } from './project';


import {
  FORM_DIRECTIVES,
  REACTIVE_FORM_DIRECTIVES,
  FormGroup
} from '@angular/forms';

@Component({
  selector: 'create-project',
  templateUrl: 'app/create-project.component.html',
  directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES]
})

export class CreateProjectComponent {

  createProjectFormm: FormGroup;

  model = new Project ();
  submitted = false;

  constructor(private router: Router,
    private projectService: ProjectService) {
  }

  onSubmit() {

  if (!this.submitted){
    this.submitted = true;
      console.log('you submitted value: ', this.model);
      this.projectService.save (this.model);
  }
}

