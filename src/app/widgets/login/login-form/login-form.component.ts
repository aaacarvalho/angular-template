import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRepository } from 'src/app/repositories/user.repository';

@Component({
  selector: 'widget-login-form',
  templateUrl: './login-form.template.html',
  styleUrls: ['./login-form.style.scss'],
})
export class LoginFormWidget {
  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  emailError = '';
  passwordError = '';
  error = '';
  loading = false;

  constructor(
    private readonly userRepository: UserRepository,
    private readonly router: Router
  ) {}

  async onSubmit() {
    this.unsetErrorMessages();

    if (!this.loginForm.valid) {
      return this.getErrorMessages();
    }

    try {
      this.loading = true;
      await this.userRepository.authenticate(
        this.loginForm.value.email as unknown as string,
        this.loginForm.value.password as unknown as string
      );

      this.router.navigate(['/projetos']);
    } catch (e: any) {
      this.loading = false;
      this.error = e.error.message;
    }
  }

  private unsetErrorMessages(): void {
    this.error = '';
    this.emailError = '';
    this.passwordError = '';
  }

  private getErrorMessages(): void {
    this.getEmailError();
    this.getPasswordError();
  }

  private getPasswordError(): void {
    const { errors } = this.loginForm.controls.password as any;
    console.log(errors);
    if (errors?.required)
      this.passwordError = 'O campo de senha é obrigatório.';
    else if (errors?.minlength)
      this.passwordError =
        'O campo de senha precisa ter pelo menos 6 caracteres.';
  }

  private getEmailError(): void {
    const { errors } = this.loginForm.controls.email as any;

    if (errors?.required) this.emailError = 'O campo de email é obrigatório.';
    else if (errors?.email) this.emailError = 'O email informado não é válido.';
  }
}
