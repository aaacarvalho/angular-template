import { NgModule } from '@angular/core';
import { ProjectCardWidget } from './project-card/project-card.component';
import { ProjectInfoWidget } from './project-info/project-info.component';
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
  declarations: [ProjectCardWidget, ProjectInfoWidget],
  exports: [ProjectCardWidget, ProjectInfoWidget],
})
export class ProjectWidgetsModule {}
