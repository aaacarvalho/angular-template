import { Component, Input } from '@angular/core';

@Component({
  selector: 'component-progress-bar',
  templateUrl: './progress-bar.template.html',
  styleUrls: ['./progress-bar.style.scss'],
})
export class ProgressBarComponent {
  @Input('progress') progress = 0;
  @Input('message') message = true;
  @Input('out') out!: string;
  @Input('of') of!: string;

  label = '';

  ngOnInit(): void {
    this.getProgressLabel();
  }

  ngOnChanges(changes: any): void {
    if (changes.progress) this.getProgressLabel();
  }

  getProgressLabel(): void {
    this.label = this.progress
      ? this.progress === 1
        ? 'Concluído'
        : this.progress > 0.5
        ? 'Quase lá!'
        : 'Em andamento.'
      : 'A fazer.';
  }
}
