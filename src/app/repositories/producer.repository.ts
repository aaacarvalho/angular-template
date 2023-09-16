import { Directive } from '@angular/core';
import { Repository } from './repository';
import { HttpClient } from '@angular/common/http';

@Directive({
  selector: 'repository-producer',
})
export class ProducerRepository extends Repository {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  async list(): Promise<any> {
    return await this.authenticatedGet('/producers');
  }
}
