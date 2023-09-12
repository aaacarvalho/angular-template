import { Component } from '@angular/core';

@Component({
  selector: 'component-column-chart',
  templateUrl: './column-chart.template.html',
  styleUrls: ['./column-chart.style.scss'],
})
export class ColumnChartComponent {
  options: any = {};

  constructor() {
    this.options = {
      series: [
        {
          name: 'Planejado Projeto',
          data: [44, 55, 57, 56],
        },
        {
          name: 'Planejado Programa',
          data: [76, 85, 101, 98],
        },
        {
          name: 'Executado',
          data: [35, 41, 36, 26],
        },
      ],
      chart: {
        type: 'bar',
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ['Cercas', 'Mudas', 'Inseticida', 'Adubo'],
      },
      yaxis: {
        title: {
          text: '$ (milhares)',
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val: number) {
            return '$ ' + val + ' mil';
          },
        },
      },
    };
  }
}
