import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class LoggedGuard {
  constructor(
    private router: Router,
    private readonly userRepository: UserRepository
  ) {}

  async canActivate(): Promise<boolean> {
    try {
      await this.userRepository.me();
      this.router.navigate(['/projetos']);
      return false;
    } catch (e) {
      return true;
    }
  }
}
