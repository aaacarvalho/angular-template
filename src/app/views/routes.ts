import { DefaultView } from './default/default-view.component';
import { LoginView } from './login/login-view.component';
import { ProjectsView } from './projects/projects-view.component';

export const routes = [
  {
    path: 'login',
    component: LoginView,
  },
  {
    path: 'projetos',
    component: ProjectsView,
  },
];
