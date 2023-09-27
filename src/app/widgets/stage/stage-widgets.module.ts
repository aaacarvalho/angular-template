import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { StageCardComponent } from './stage-card/stage-card.component';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [DragDropModule, CommonModule, ComponentsModule],
  declarations: [StageCardComponent],
  exports: [StageCardComponent],
})
export class StageWidgetsModule {}
