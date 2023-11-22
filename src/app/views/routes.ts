import { Route } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { DashboardView } from './dashboard/dashboard-view.component';
import { AccountingView } from './financials/accounting-view.component';
import { LoginView } from './login/login-view.component';
import { ProducersView } from './producers/producers-view.component';
import { ProjectsView } from './projects/projects-view.component';
import { SupportView } from './support/support-view.component';
import { LoggedGuard } from '../guards/logged.guard';
import { PowerBiView } from './powerbi/powerbi.component';

export const routes: Route[] = [
  {
    path: 'login',
    component: LoginView,
    canActivate: [LoggedGuard],
  },
  {
    path: 'projetos',
    component: ProjectsView,
    canActivate: [AuthGuard],
  },
  {
    path: 'produtores',
    component: ProducersView,
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard',
    component: DashboardView,
    canActivate: [AuthGuard],
  },
  {
    path: 'chamados',
    component: SupportView,
    canActivate: [AuthGuard],
  },
  {
    path: 'financeiro',
    component: AccountingView,
    canActivate: [AuthGuard],
  },
  {
    path: 'powerbi',
    component: PowerBiView,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
