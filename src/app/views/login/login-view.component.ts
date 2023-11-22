import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserRepository } from 'src/app/repositories/user.repository';

@Component({
  templateUrl: './login-view.template.html',
  styleUrls: ['login-view.style.scss'],
})
export class LoginView {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    try {
      await this.userRepository.me();
      this.router.navigate(['/projetos']);
    } catch (e) {}
  }
}
