import { Component, Input } from '@angular/core';

@Component({
  selector: 'widget-project-list',
  templateUrl: './project-list.template.html',
  styleUrls: ['./project-list.style.scss'],
})
export class ProjectListWidget {
  @Input('loading') loading = true;
  @Input('projects') projects: Record<string, any>[] = [];
}
