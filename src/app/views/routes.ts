import { DashboardView } from './dashboard/dashboard-view.component';
import { AccountingView } from './financials/accounting-view.component';
import { LoginView } from './login/login-view.component';
import { ProducersView } from './producers/producers-view.component';
import { ProjectsView } from './projects/projects-view.component';
import { SupportView } from './support/support-view.component';

export const routes = [
  {
    path: 'login',
    component: LoginView,
  },
  {
    path: 'projetos',
    component: ProjectsView,
  },
  {
    path: 'produtores',
    component: ProducersView,
  },
  {
    path: 'dashboard',
    component: DashboardView,
  },
  {
    path: 'chamados',
    component: SupportView,
  },
  {
    path: 'financeiro',
    component: AccountingView,
  },
];
