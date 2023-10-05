import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserRepository } from 'src/app/repositories/user.repository';

@Component({
  selector: 'widget-login-form',
  templateUrl: './login-form.template.html',
  styleUrls: ['./login-form.style.scss'],
})
export class LoginFormWidget {
  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  constructor(private readonly userRepository: UserRepository) {}

  async onSubmit() {
    await this.userRepository.authenticate(
      this.loginForm.value.email,
      this.loginForm.value.password
    );
  }
}
