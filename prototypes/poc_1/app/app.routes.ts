import { provideRouter, RouterConfig }  from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { DashboardComponent }from './dashboard.component';
import { ProjectDetailComponent } from './project-detail.component';
import { CreateProjectComponent } from './create-project.component';

const routes: RouterConfig = [
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'createProject',
    component: CreateProjectComponent
  },
  {
    path: 'detail/:id',
    component: ProjectDetailComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
