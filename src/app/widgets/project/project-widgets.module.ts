import { NgModule } from '@angular/core';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { GeneralWidgetsModule } from '../general/general-widgets.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    ComponentsModule,
    GeneralWidgetsModule,
    NgxSkeletonLoaderModule,
    CommonModule,
  ],
  declarations: [ProjectCardComponent, ProjectInfoComponent],
  exports: [ProjectCardComponent, ProjectInfoComponent],
})
export class ProjectWidgetsModule {}
