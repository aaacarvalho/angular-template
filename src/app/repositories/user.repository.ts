import { Directive } from '@angular/core';
import { Repository } from './repository';
import { HttpClient } from '@angular/common/http';

@Directive({
  selector: 'user-repository',
})
export class UserRepository extends Repository {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  async authenticate(email: string, password: string): Promise<void> {
    const credentials = { email, password };
    const { accessToken } = await this.toPromise<{ accessToken: string }>(
      this.httpClient.post(`${this.baseUrl}/login`, credentials)
    );

    localStorage.setItem('api-token', accessToken);
  }

  async me(): Promise<void> {
    return await this.authenticatedGet('/profile');
  }
}
