import { Directive } from '@angular/core';
import { Repository } from './repository';
import { HttpClient } from '@angular/common/http';
import { ProducerModel } from '../models/producer.model';

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

  async search(searchFor: string): Promise<ProducerModel[]> {
    const response = await this.authenticatedGet(
      `/producers?filter[user][name]=${searchFor}`
    );

    return response.producers;
  }
}
