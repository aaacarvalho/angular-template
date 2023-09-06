import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SidebarComponent } from './sidebar/sidebar.component';
import { ButtonComponent } from './button/button.component';
import { LogoComponent } from './logo/logo.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { InputComponent } from './input/input.component';
import { DrawerComponent } from './drawer/drawer.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [
    SidebarComponent,
    ButtonComponent,
    LogoComponent,
    LoginFormComponent,
    InputComponent,
    DrawerComponent,
    NotificationComponent,
  ],
  imports: [BrowserModule],
  exports: [
    SidebarComponent,
    ButtonComponent,
    LoginFormComponent,
    DrawerComponent,
    NotificationComponent,
  ],
})
export class ComponentsModule {}
