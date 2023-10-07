import { NgModule } from '@angular/core';
import { GeneralWidgetsModule } from './general/general-widgets.module';
import { ProjectWidgetsModule } from './project/project-widgets.module';
import { LoginWidgetsModule } from './login/login-widgets.module';
import { ComponentsModule } from '../components/components.module';
import { ProducerWidgetsModule } from './producer/producer-widgets.module';
import { StageWidgetsModule } from './stage/stage-widgets.module';
import { ProgramWidgetsModule } from './program/program-widgets.module';
import { PropertyWidgets } from './property/property-widgets.module';

@NgModule({
  imports: [
    GeneralWidgetsModule,
    ProjectWidgetsModule,
    LoginWidgetsModule,
    ComponentsModule,
    ProducerWidgetsModule,
    StageWidgetsModule,
    ProgramWidgetsModule,
    PropertyWidgets,
  ],
  exports: [
    GeneralWidgetsModule,
    ProjectWidgetsModule,
    LoginWidgetsModule,
    ProducerWidgetsModule,
    StageWidgetsModule,
  ],
})
export class WidgetsModule {}
