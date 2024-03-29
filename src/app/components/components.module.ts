import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SidebarComponent } from './sidebar/sidebar.component';
import { ButtonComponent } from './button/button.component';
import { LogoComponent } from './logo/logo.component';
import { InputComponent } from './input/input.component';
import { DrawerComponent } from './drawer/drawer.component';
import { NotificationComponent } from './notification/notification.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { UserRepository } from '../repositories/user.repository';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NgxMaskDirective } from 'ngx-mask';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { SelectComponent } from './select/select.component';
import { QuantitySelectorComponent } from './quantity-selector/quantity-selector.component';
import { BalloonComponent } from './balloon/balloon.component';

@NgModule({
  providers: [UserRepository],
  declarations: [
    SidebarComponent,
    ButtonComponent,
    LogoComponent,
    InputComponent,
    DrawerComponent,
    NotificationComponent,
    ProgressBarComponent,
    SelectComponent,
    QuantitySelectorComponent,
    BalloonComponent,
  ],
  imports: [
    BrowserModule,
    NgApexchartsModule,
    NgxSkeletonLoaderModule,
    NgxMaskDirective,
  ],
  exports: [
    SidebarComponent,
    ButtonComponent,
    LogoComponent,
    InputComponent,
    DrawerComponent,
    NotificationComponent,
    ProgressBarComponent,
    SelectComponent,
    QuantitySelectorComponent,
    BalloonComponent,
  ],
})
export class ComponentsModule {}
