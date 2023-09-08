import { Component, Input } from '@angular/core';

@Component({
  selector: 'component-project-card',
  templateUrl: './project-card.template.html',
  styleUrls: ['./project-card.style.scss'],
})
export class ProjectCardComponent {
  overlay = false;
  details = false;
  @Input('project') project: Record<string, any> = {};

  showOverlay(): void {
    this.overlay = true;
  }

  hideOverlay(): void {
    this.overlay = false;
  }

  showDetails(): void {
    this.details = true;
  }

  hideDetails(value: boolean): void {
    this.details = value;
  }
}
