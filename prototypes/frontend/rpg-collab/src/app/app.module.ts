import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule }  from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdSidenav, MdMenuModule, MdToolbarModule, MdIconModule, MdTabsModule, MdListModule, MdButtonToggleModule, MdSidenavModule } from '@angular/material';
import { ProjectService } from './projects/project.service';

import { AppComponent } from './app.component';

import { ProjectsOverviewComponent } from './projects/projects.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    ProjectsOverviewComponent,
    ProjectDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdTabsModule,
    MdListModule,
    MdSidenavModule,
    MdButtonToggleModule,
    AppRoutingModule,
    MdSidenavModule
    
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
