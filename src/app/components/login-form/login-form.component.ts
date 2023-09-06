import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'component-login-form',
  templateUrl: './login-form.template.html',
  styleUrls: ['./login-form.style.scss'],
})
export class LoginFormComponent {
  constructor(private readonly httpClient: HttpClient) {}

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
    const response = await this.httpClient
      .post('https://54.88.119.168.nip.io/api/login', {
        email: this.email,
        password: this.password,
      })
      .subscribe((res) => console.log(res));

    console.log(response);
  }
}
