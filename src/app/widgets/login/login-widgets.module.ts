import { NgModule } from '@angular/core';
import { LoginFormComponent } from './login-form/login-form.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [ComponentsModule],
  declarations: [LoginFormComponent],
  exports: [LoginFormComponent],
})
export class LoginWidgetsModule {}
