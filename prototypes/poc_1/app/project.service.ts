import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Project } from './project';

@Injectable()
export class ProjectService {
  private projectsUrl = 'http://rpgcollab.duckdns.org:3000/projects';

  constructor(private http: Http) { }
  getProjects(): Promise<Project[]> {
    return this.http.get(this.projectsUrl)
      .toPromise()
      .then(response =>{
        return response.json();
      })
      .catch(this.handleError);
  }

  getProject(id: string): Promise<Project> {
    return this.getProjects()
      .then(Projects => Projects.find(Project => Project._id === id));
  }

  save(Project: Project): Promise<Project>  {
    if (Project._id) {
      return this.put(Project);
    }
    return this.post(Project);
  }

  delete(Project: Project) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this.projectsUrl}/${Project._id}`;
    return this.http
      .delete(url, headers)
      .toPromise()
      .catch(this.handleError);
  }

  // Add new Project
  private post(project: Project): Promise<Project> {

    let json = JSON.stringify(project);
    let headers = new Headers({
      'Content-Type': 'application/json'});
    return this.http
      .post(this.projectsUrl, json, {headers: headers})
      .toPromise()
      .then(res => new Project()) //TODO: return created project?
      .catch(this.handleError);
  }

  // Update existing Project
  private put(Project: Project) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this.projectsUrl}/${Project._id}`;
    return this.http
      .put(url, JSON.stringify(Project), {headers: headers})
      .toPromise()
      .then(() => Project)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
