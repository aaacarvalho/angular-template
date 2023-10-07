import { NgModule } from '@angular/core';
import { ProgramSelectorWidget } from './program-selector/program-selector.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [ProgramSelectorWidget],
  exports: [ProgramSelectorWidget],
})
export class ProgramWidgetsModule {}
