import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserRepository } from 'src/app/repositories/user.repository';

@Component({
  selector: 'component-login-form',
  templateUrl: './login-form.template.html',
  styleUrls: ['./login-form.style.scss'],
})
export class LoginFormComponent {
  constructor(private readonly userRepository: UserRepository) {}

  email = '';
  password = '';

  emailChange(value: string): void {
    this.email = value;
  }

  passwordChange(value: string) {
    this.password = value;
  }

  async submit(event: Event): Promise<void> {
    event.preventDefault();
    await this.userRepository.authenticate(this.email, this.password);
  }
}
