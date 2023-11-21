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
    {
      label: 'Financeiro',
      icon: 'assets/icons/dollar.svg',
      path: 'financeiro',
    },
    { label: 'Usuários', icon: 'assets/icons/user.svg', path: 'usuarios' },
    {
      label: 'Chamados',
      icon: 'assets/icons/support.svg',
      path: 'chamados',
    },
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
