import { NgModule } from '@angular/core';
import { LoginFormComponent } from './login-form/login-form.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [ComponentsModule, ReactiveFormsModule],
  declarations: [LoginFormComponent],
  exports: [LoginFormComponent],
})
export class LoginWidgetsModule {}
