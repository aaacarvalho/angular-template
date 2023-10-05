import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  ActivityModel,
  ChildActivityModel,
} from 'src/app/models/activity.model';

@Component({
  selector: 'widget-activity-item',
  templateUrl: './activity-item.template.html',
  styleUrls: ['./activity-item.style.scss'],
})
export class ActivityItemWidget {
  @Input('activity') activity!: ActivityModel;
  @Output() activityToggled = new EventEmitter<ActivityModel>();

  children: ChildActivityModel[] = [];
  showChildren = true;

  ngOnInit(): void {
    if (this.activity.children?.length) {
      this.children = [...this.activity.children];
    }
  }

  toggleChildren(value: boolean): void {
    this.showChildren = value;
  }

  toggleActivity(value: boolean): void {
    this.activity = {
      ...this.activity,
      checked: value,
      checkedAt: value ? new Date() : undefined,
    };

    this.activityToggled.emit(this.activity);
  }

  drop(event: CdkDragDrop<ChildActivityModel[]>) {
    moveItemInArray(this.children, event.previousIndex, event.currentIndex);
  }

  toggleChildActivity(id: string, value: boolean): void {
    this.children = this.children.map((child) =>
      child.id === id
        ? {
            ...child,
            checked: value,
            checkedAt: value ? new Date() : undefined,
          }
        : child
    );

    this.activity = { ...this.activity, children: this.children };

    this.calculateProgress();
  }

  calculateProgress(): void {
    const unCheckedChild = this.children.find((activity) => !activity.checked);

    const checked = unCheckedChild
      ? { checked: false, checkedAt: undefined }
      : { checked: true, checkedAt: new Date() };

    this.activity = {
      ...this.activity,
      ...checked,
    };

    this.activityToggled.emit(this.activity);
  }

  addChildActivity(activity: ActivityModel): void {
    this.children = [...this.children, activity];
    this.activity = {
      ...this.activity,
      children: this.children,
    };
  }
}
