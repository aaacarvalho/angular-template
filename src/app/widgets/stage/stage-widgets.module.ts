import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { StageCardWidget } from './stage-card/stage-card.component';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import { ActivityItemWidget } from './activity-item/activity-item.component';
import { NewActivityWidget } from './new-activity/new-activity.component';

@NgModule({
  imports: [DragDropModule, CommonModule, ComponentsModule],
  declarations: [StageCardWidget, ActivityItemWidget, NewActivityWidget],
  exports: [StageCardWidget],
})
export class StageWidgetsModule {}
