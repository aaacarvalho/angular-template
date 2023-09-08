import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';
import { LoginView } from './login/login-view.component';
import { routes } from './routes';
import { DefaultView } from './default/default-view.component';
import { ProjectsView } from './projects/projects-view.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [LoginView, DefaultView, ProjectsView],
  imports: [
    BrowserModule,
    ComponentsModule,
    RouterModule.forRoot(routes),
    NgxSkeletonLoaderModule,
  ],
  exports: [RouterModule],
})
export class ViewsModule {}
