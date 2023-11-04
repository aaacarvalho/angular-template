import { Component } from '@angular/core';

@Component({
  selector: 'view-dashboard',
  templateUrl: './dashboard-view.template.html',
  styleUrls: ['./dashboard-view.style.scss'],
})
export class DashboardView {
  croqui = [
    {
      muda: 'Café',
      x: 2,
      y: 2,
      color: '#381704',
    },
    {
      muda: 'Banana',
      x: 2,
      y: 1,
      color: '#838710',
    },
    {
      muda: 'Nativa',
      x: 3,
      y: 2,
      color: '#1e3a03',
    },
  ];

  modalities = [
    {
      id: '1',
      name: 'SAF',
      arranjo: 'CAN',
      area: '2ha',
      planejado: '45%',
      executado: '78%',
      value: 'R$ 2.873,26',
      color: '#865bd4',
    },
    {
      id: '2',
      name: 'REC',
      arranjo: 'CAN',
      area: '2ha',
      planejado: '45%',
      executado: '78%',
      value: 'R$ 2.873,26',
      color: '#148f47',
    },
    {
      id: '3',
      name: 'REG',
      arranjo: 'CAN',
      area: '2ha',
      planejado: '45%',
      executado: '78%',
      value: 'R$ 2.873,26',
      color: '#196d94',
    },
  ];

  selectedModalityId = '';

  selectModality(id: string): void {
    if (id === this.selectedModalityId) this.selectedModalityId = '';
    else this.selectedModalityId = id;
  }
}
