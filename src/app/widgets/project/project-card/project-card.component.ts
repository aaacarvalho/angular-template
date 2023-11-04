import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectRepository } from 'src/app/repositories/project.repository';

@Component({
  selector: 'widget-project-card',
  templateUrl: './project-card.template.html',
  styleUrls: ['./project-card.style.scss'],
})
export class ProjectCardWidget {
  showInfo = false;
  projectDetails = {};
  loadingDetails = false;
  showDetailsDrawer = false;

  @Input('project') project!: Record<string, any>;

  constructor(
    private readonly projectRepository: ProjectRepository,
    private readonly router: Router
  ) {}

  setInfoVisibility(value: boolean) {
    this.showInfo = value;
  }

  async openDetailsDrawer(): Promise<void> {
    this.loadingDetails = true;
    this.showDetailsDrawer = true;
    try {
      await this.projectRepository.get(this.project.id);
    } catch (e) {}
    this.loadingDetails = false;
  }

  closeDetailsDrawer(): void {
    this.showDetailsDrawer = false;
  }

  goToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }
}
