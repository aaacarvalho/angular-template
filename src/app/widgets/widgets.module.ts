import { NgModule } from '@angular/core';
import { GeneralWidgetsModule } from './general/general-widgets.module';
import { ProjectWidgetsModule } from './project/project-widgets.module';
import { LoginWidgetsModule } from './login/login-widgets.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    GeneralWidgetsModule,
    ProjectWidgetsModule,
    LoginWidgetsModule,
    ComponentsModule,
  ],
  exports: [GeneralWidgetsModule, ProjectWidgetsModule, LoginWidgetsModule],
})
export class WidgetsModule {}
