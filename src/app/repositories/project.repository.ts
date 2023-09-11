import { HttpClient } from '@angular/common/http';
import { Repository } from './repository';
import { Directive } from '@angular/core';

@Directive({
  selector: 'project-repository',
})
export class ProjectRepository extends Repository {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  async get(id: string): Promise<any> {
    return await this.authenticatedGet(`projects/${id}`);
  }

  async list(): Promise<any[]> {
    return await this.authenticatedGet('projects');
  }
}
