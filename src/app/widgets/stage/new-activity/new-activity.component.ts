import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivityModel } from 'src/app/models/activity.model';

@Component({
  selector: 'widget-new-activity',
  templateUrl: './new-activity.template.html',
  styleUrls: ['./new-activity.style.scss'],
})
export class NewActivityWidget {
  description = '';
  isList = false;

  @Input('canHaveChildren') canHaveChildren = true;

  @Output('activityCreated') activityCreated =
    new EventEmitter<ActivityModel>();

  changeDescription(event: any): void {
    this.description = event.target.value;
  }

  changeToList(value: boolean): void {
    this.isList = value;
  }

  addActivity(): void {
    if (!this.description) return;

    this.activityCreated.emit({
      id: new Date().getTime().toString(),
      description: this.description,
      checked: false,
      children: this.isList ? [] : undefined,
    });

    this.resetActivity();
  }

  resetActivity(): void {
    this.isList = false;
    this.description = '';
  }
}
