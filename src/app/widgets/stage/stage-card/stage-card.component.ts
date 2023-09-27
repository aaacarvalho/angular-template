import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'component-stage-card',
  templateUrl: './stage-card.template.html',
  styleUrls: ['./stage-card.style.scss'],
})
export class StageCardComponent {
  progress = 0;
  changes = 0;
  activities = [
    {
      id: 1,
      description: 'Pegar certidão de nascimento.',
      checked: true,
      checkedAt: new Date(),
    },
    {
      id: 2,
      description: 'Tirar foto 3x4.',
      checked: true,
      checkedAt: new Date(),
    },
    {
      id: 3,
      description: 'Reconhecer firma no cartório.',
      checked: false,
    },
    {
      id: 4,
      description: 'Assinar contrato.',
      checked: false,
    },
  ];

  ngOnInit(): void {
    this.calculateProgress();
  }

  toggleActivity(id: number, value: boolean): void {
    this.activities = this.activities.map((activity) => {
      if (activity.id === id) {
        return {
          ...activity,
          checked: value,
          checkedAt: value ? new Date() : undefined,
        };
      }
      return activity;
    });

    this.calculateProgress();
  }

  calculateProgress(): void {
    const completed = this.activities.filter((activity) => activity.checked);
    this.progress = completed.length / this.activities.length;
  }

  drop(
    event: CdkDragDrop<
      { id: number; description: string; checked: boolean; checkedAt?: Date }[]
    >
  ) {
    moveItemInArray(this.activities, event.previousIndex, event.currentIndex);
  }
}
