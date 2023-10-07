import { Directive } from '@angular/core';
import { Repository } from './repository';
import { HttpClient } from '@angular/common/http';

@Directive({
  selector: 'repository-property',
})
export class PropertyRepository extends Repository {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  async get(id: string): Promise<any> {
    return await this.authenticatedGet(`properties/${id}`);
  }

  async list(): Promise<any[]> {
    const response = await this.authenticatedGet('properties');
    return response.properties;
  }
}
