import { Component, Input, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { ProjectRepository } from 'src/app/repositories/project.repository';

@Component({
  selector: 'component-project-card',
  templateUrl: './project-card.template.html',
  styleUrls: ['./project-card.style.scss'],
})
export class ProjectCardComponent {
  showInfo = false;
  loadingDetails = true;
  showDetailsDrawer = false;
  chartOptions: any;
  projectDetails = {};

  @Input('project') project!: Record<string, any>;
  @ViewChild('chart') chart!: ChartComponent;

  constructor(private readonly projectRepository: ProjectRepository) {
    this.chartOptions = {
      series: [55, 30, 15],
      labels: ['Concluído', 'Em andamento', 'A fazer'],
      chart: {
        type: 'donut',
      },
      dataLabels: {
        enabled: false,
      },
    };
  }

  setInfoVisibility(value: boolean) {
    this.showInfo = value;
  }

  hideDetails(value: boolean): void {
    this.showDetailsDrawer = value;
  }

  showDetails(): void {
    return;
  }
}
