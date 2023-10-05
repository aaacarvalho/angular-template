import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, SimpleChanges } from '@angular/core';
import { ActivityModel } from 'src/app/models/activity.model';

@Component({
  selector: 'widget-stage-card',
  templateUrl: './stage-card.template.html',
  styleUrls: ['./stage-card.style.scss'],
})
export class StageCardWidget {
  progress = 0;
  activities: ActivityModel[] = [
    {
      id: '1',
      description: 'Pegar certidão de nascimento.',
      checked: false,
      children: [
        {
          id: '10',
          description: 'Pegar certidão de nascimento do filho.',
          checked: false,
        },
        {
          id: '11',
          description: 'Pegar certidão de nascimento da filha.',
          checked: false,
        },
      ],
    },
    {
      id: '2',
      description: 'Tirar foto 3x4.',
      checked: false,
    },
    {
      id: '3',
      description: 'Reconhecer firma no cartório.',
      checked: false,
      children: [
        {
          id: '12',
          description: 'Pegar certidão de nascimento do filho.',
          checked: false,
        },
        {
          id: '13',
          description: 'Pegar certidão de nascimento do filho.',
          checked: false,
        },
        {
          id: '14',
          description: 'Pegar certidão de nascimento do filho.',
          checked: false,
        },
        {
          id: '15',
          description: 'Pegar certidão de nascimento do filho.',
          checked: false,
        },
      ],
    },
    {
      id: '4',
      description: 'Assinar contrato.',
      checked: false,
    },
  ];

  ngOnInit(): void {
    this.calculateProgress();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  updateProgress(toggledActivity: ActivityModel): void {
    this.activities = this.activities.map((activity) =>
      activity.id === toggledActivity.id ? toggledActivity : activity
    );

    this.calculateProgress();
  }

  calculateProgress(): void {
    let completed = 0;
    let notCompleted = 0;

    this.activities.forEach((activity) => {
      if (activity.children?.length) {
        activity.children.forEach((child) => {
          child.checked ? completed++ : notCompleted++;
        });
      } else {
        activity.checked ? completed++ : notCompleted++;
      }
    });

    this.progress = completed / (completed + notCompleted);
  }

  drop(event: CdkDragDrop<ActivityModel[]>) {
    moveItemInArray(this.activities, event.previousIndex, event.currentIndex);
  }

  addActivity(activity: ActivityModel): void {
    this.activities = [...this.activities, activity];
  }
}
