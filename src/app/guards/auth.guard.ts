import { Injectable } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class AuthGuard {
  constructor(
    private router: Router,
    private readonly userRepository: UserRepository
  ) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    const token = localStorage.getItem('api-token');

    if (!token) {
      this.cantProceedAction(state);
      return false;
    }

    try {
      await this.userRepository.me();
      return true;
    } catch (e) {
      this.cantProceedAction(state);
      return false;
    }
  }

  private cantProceedAction(state: RouterStateSnapshot): void {
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
  }
}
