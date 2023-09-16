import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'component-sidebar',
  templateUrl: './sidebar.template.html',
  styleUrls: ['./sidebar.style.scss'],
})
export class SidebarComponent {
  collapsed = true;

  constructor(private router: Router) {}

  menu = [
    {
      label: 'Produtores',
      icon: 'assets/icons/roadwork.svg',
      path: 'produtores',
    },
    { label: 'Projetos', icon: 'assets/icons/project.svg', path: 'projetos' },
    { label: 'Mudas', icon: 'assets/icons/leaf.svg', path: 'mudas' },
    { label: 'Usuários', icon: 'assets/icons/user.svg', path: 'usuarios' },
    {
      label: 'Configurações',
      icon: 'assets/icons/settings.svg',
      path: 'configuracoes',
    },
  ];

  toggle(): void {
    this.collapsed = !this.collapsed;
  }

  navigate(path: string): void {
    this.router.navigate([path]);
  }
}
