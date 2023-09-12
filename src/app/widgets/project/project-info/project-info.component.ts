import { Component, Input } from '@angular/core';

@Component({
  selector: 'component-project-info',
  templateUrl: './project-info.template.html',
  styleUrls: ['./project-info.style.scss'],
})
export class ProjectInfoComponent {
  @Input('loading') loading: boolean = true;
  @Input('project') project: any = {};

  showConfirmDrawer = false;

  openConfirmDrawer(): void {
    this.showConfirmDrawer = true;
  }

  closeConfirmDrawer(): void {
    this.showConfirmDrawer = false;
  }
}
