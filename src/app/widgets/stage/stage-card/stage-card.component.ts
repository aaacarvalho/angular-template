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
      description: 'Pré cadastro',
      children: [
        {
          id: '2',
          description: 'CPF',
          checked: false,
        },
        {
          id: '3',
          description: 'RG',
          checked: false,
        },
        {
          id: '4',
          description: 'Comprovante de Residência',
          checked: false,
        },
      ],
      checked: false,
    },
    {
      id: '5',
      description: 'Solicitação de documentação',
      checked: false,
    },
    {
      id: '6',
      description: 'Solicitar atribuição',
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
