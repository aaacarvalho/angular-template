import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';
import { LoginView } from './login/login-view.component';
import { routes } from './routes';
import { DefaultView } from './default/default-view.component';

@NgModule({
  declarations: [LoginView, DefaultView],
  imports: [BrowserModule, ComponentsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ViewsModule {}
