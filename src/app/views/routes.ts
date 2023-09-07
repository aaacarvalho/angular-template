import { DefaultView } from './default/default-view.component';
import { LoginView } from './login/login-view.component';

export const routes = [
  {
    path: 'login',
    component: LoginView,
  },
  {
    path: '',
    component: DefaultView,
  },
];
