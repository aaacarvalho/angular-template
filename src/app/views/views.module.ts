import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';
import { LoginView } from './login/login-view.component';
import { routes } from './routes';
import { DefaultView } from './default/default-view.component';
import { ProjectsView } from './projects/projects-view.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ProjectRepository } from '../repositories/project.repository';
import { ProducersView } from './producers/producers-view.component';
import { ProducerRepository } from '../repositories/producer.repository';
import { WidgetsModule } from '../widgets/widgets.module';
import { DashboardView } from './dashboard/dashboard-view.component';
import { SupportView } from './support/support-view.component';
import { AccountingView } from './financials/accounting-view.component';

@NgModule({
  providers: [ProjectRepository, ProducerRepository],
  declarations: [
    LoginView,
    DefaultView,
    ProjectsView,
    ProducersView,
    DashboardView,
    SupportView,
    AccountingView,
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    RouterModule.forRoot(routes),
    NgxSkeletonLoaderModule,
    WidgetsModule,
  ],
  exports: [RouterModule],
})
export class ViewsModule {}
