import { NgModule } from '@angular/core';
import { ProjectCardWidget } from './project-card/project-card.component';
import { ProjectInfoWidget } from './project-info/project-info.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { GeneralWidgetsModule } from '../general/general-widgets.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { CommonModule } from '@angular/common';
import { ProjectListWidget } from './project-list/project-list.component';
import { NewProjectWidget } from './new-project/new-project.component';
import { ProducerWidgetsModule } from '../producer/producer-widgets.module';
import { ProgramWidgetsModule } from '../program/program-widgets.module';
import { PropertyWidgets } from '../property/property-widgets.module';

@NgModule({
  imports: [
    ComponentsModule,
    GeneralWidgetsModule,
    NgxSkeletonLoaderModule,
    CommonModule,
    ProducerWidgetsModule,
    ProgramWidgetsModule,
    PropertyWidgets,
  ],
  declarations: [
    ProjectCardWidget,
    ProjectInfoWidget,
    ProjectListWidget,
    NewProjectWidget,
  ],
  exports: [
    ProjectCardWidget,
    ProjectInfoWidget,
    ProjectListWidget,
    NewProjectWidget,
  ],
})
export class ProjectWidgetsModule {}
