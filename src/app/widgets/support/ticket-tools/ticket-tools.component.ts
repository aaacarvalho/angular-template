import { Component } from '@angular/core';

@Component({
  selector: 'widget-ticket-tools',
  templateUrl: './ticket-tools.template.html',
  styleUrls: ['./ticket-tools.style.scss'],
})
export class TicketToolsWidget {
  tags = [
    {
      label: 'plantação',
      color: '#2e7831',
      checked: false,
    },
    {
      label: 'colheita',
      color: '#964842',
      checked: false,
    },
    {
      label: 'documentação',
      color: '#221347',
      checked: false,
    },
    {
      label: 'fornecedores',
      color: '#aa6dbd',
      checked: false,
    },
    {
      label: 'mudas',
      color: '#5b7a4e',
      checked: false,
    },
    {
      label: 'financeiro',
      color: '#6b1934',
      checked: false,
    },
  ];

  statuses = [
    {
      label: 'Aberto',
      color: '#564e63',
      checked: false,
    },
    {
      label: 'Iniciado',
      color: '#574e37',
      checked: false,
    },
    {
      label: 'Concluído',
      color: '#2e0614',
      checked: false,
    },
    {
      label: 'Encerrado',
      color: '#7a2d3f',
      checked: false,
    },
  ];

  priorities = [
    {
      label: 'Baixa',
      color: '#40c78a',
      checked: false,
    },
    {
      label: 'Média',
      color: '#1a97bd',
      checked: false,
    },
    {
      label: 'Alta',
      color: '#b0138b',
      checked: false,
    },
    {
      label: 'Urgente',
      color: '#bf1f2c',
      checked: false,
    },
  ];

  checkTag(label: string): void {
    this.tags = this.tags.map((tag) =>
      tag.label === label ? { ...tag, checked: !tag.checked } : tag
    );
  }

  checkStatus(label: string): void {
    this.statuses = this.statuses.map((status) =>
      status.label === label ? { ...status, checked: !status.checked } : status
    );
  }

  checkPriority(label: string): void {
    this.priorities = this.priorities.map((priority) =>
      priority.label === label
        ? { ...priority, checked: !priority.checked }
        : priority
    );
  }
}
