import { Component } from '@angular/core';

@Component({
  selector: 'component-donut-chart',
  templateUrl: './donut-chart.template.html',
  styleUrls: ['./donut-chart.style.scss'],
})
export class DonutChartComponent {
  chartOptions: any;

  constructor() {
    this.chartOptions = {
      series: [55, 30, 15],
      labels: ['Concluído', 'Em andamento', 'A fazer'],
      chart: {
        type: 'donut',
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        y: {
          formatter: (value: number) => `${value}%`,
        },
      },
    };
  }
}
