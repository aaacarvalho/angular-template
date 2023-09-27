import { NgModule } from '@angular/core';
import { GeneralWidgetsModule } from './general/general-widgets.module';
import { ProjectWidgetsModule } from './project/project-widgets.module';
import { LoginWidgetsModule } from './login/login-widgets.module';
import { ComponentsModule } from '../components/components.module';
import { ProducerWidgets } from './producer/producer-widgets.module';
import { StageWidgetsModule } from './stage/stage-widgets.module';

@NgModule({
  imports: [
    GeneralWidgetsModule,
    ProjectWidgetsModule,
    LoginWidgetsModule,
    ComponentsModule,
    ProducerWidgets,
    StageWidgetsModule,
  ],
  exports: [
    GeneralWidgetsModule,
    ProjectWidgetsModule,
    LoginWidgetsModule,
    ProducerWidgets,
    StageWidgetsModule,
  ],
})
export class WidgetsModule {}
