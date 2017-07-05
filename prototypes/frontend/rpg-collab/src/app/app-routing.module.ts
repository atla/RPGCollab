import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { ProjectsOverviewComponent } from './projects/projects.component'
import { ProjectDetailComponent } from './project-detail/project-detail.component'

//import { CrisisListComponent }   from './crisis-list.component';
//import { HeroListComponent }     from './hero-list.component';
//import { PageNotFoundComponent } from './not-found.component';
const appRoutes: Routes = [
  { path: 'projects', component: ProjectsOverviewComponent },
  { path: 'project/:id', component: ProjectDetailComponent },
  { path: '',   redirectTo: '/projects', pathMatch: 'full' },
  //{ path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}