import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardView } from './dashboard/dashboard-view.component';
import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';
import { LoginView } from './login/login-view.component';

const routes = [
  {
    path: 'login',
    component: LoginView,
  },
  {
    path: 'dashboard',
    component: DashboardView,
  },
];

@NgModule({
  declarations: [DashboardView, LoginView],
  imports: [BrowserModule, ComponentsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ViewsModule {}
