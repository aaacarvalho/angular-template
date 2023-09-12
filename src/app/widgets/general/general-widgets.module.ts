import { NgModule } from '@angular/core';
import { ColumnChartComponent } from './column-chart/column-chart.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  imports: [ComponentsModule, NgApexchartsModule],
  declarations: [ColumnChartComponent, DonutChartComponent],
  exports: [ColumnChartComponent, DonutChartComponent],
})
export class GeneralWidgetsModule {}
