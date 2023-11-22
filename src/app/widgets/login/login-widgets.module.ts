import { NgModule } from '@angular/core';
import { LoginFormWidget } from './login-form/login-form.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [ComponentsModule, ReactiveFormsModule, CommonModule],
  declarations: [LoginFormWidget],
  exports: [LoginFormWidget],
})
export class LoginWidgetsModule {}
