import { HttpClient } from '@angular/common/http';
import { Observable, lastValueFrom, take } from 'rxjs';

export abstract class Repository {
  protected baseUrl =
    'https://mvgi-backend-stage-70741a31b8c2.herokuapp.com/api';

  constructor(protected readonly httpClient: HttpClient) {}

  protected authenticatedGet(path: string): Promise<any> {
    const authHeader = this.getAuthorizationHeaders();
    const apiResponseObservable = this.httpClient.get(
      `${this.baseUrl}/${path}`,
      {
        headers: authHeader,
      }
    );

    return this.toPromise(apiResponseObservable);
  }

  protected getAuthorizationHeaders(): { Authorization: string } {
    const token = window.localStorage.getItem('api-token');
    return {
      Authorization: `Bearer ${token}`,
    };
  }

  protected toPromise<T>(observable: Observable<any>): Promise<T> {
    const observableResult = observable.pipe(take(1));
    return lastValueFrom(observableResult);
  }
}
