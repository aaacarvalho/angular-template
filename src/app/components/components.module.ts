import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SidebarComponent } from './sidebar/sidebar.component';
import { ButtonComponent } from './button/button.component';
import { LogoComponent } from './logo/logo.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { InputComponent } from './input/input.component';
import { DrawerComponent } from './drawer/drawer.component';
import { NotificationComponent } from './notification/notification.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { UserRepository } from '../repositories/user.repository';

@NgModule({
  providers: [UserRepository],
  declarations: [
    SidebarComponent,
    ButtonComponent,
    LogoComponent,
    LoginFormComponent,
    InputComponent,
    DrawerComponent,
    NotificationComponent,
    ProjectCardComponent,
  ],
  imports: [BrowserModule, NgApexchartsModule],
  exports: [
    SidebarComponent,
    ButtonComponent,
    LoginFormComponent,
    DrawerComponent,
    NotificationComponent,
    ProjectCardComponent,
    InputComponent,
  ],
})
export class ComponentsModule {}
