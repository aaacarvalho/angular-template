import { Component } from '@angular/core';
import { ProjectRepository } from 'src/app/repositories/project.repository';

@Component({
  selector: 'view-projects',
  templateUrl: './projects-view.template.html',
  styleUrls: ['./projects-view.style.scss'],
})
export class ProjectsView {
  loading = true;
  currentProjects: Record<string, any>[] = [];
  totalProjects: Record<string, any>[] = [];

  startANewProject = false;

  constructor(private readonly projectRepository: ProjectRepository) {}

  async ngOnInit(): Promise<void> {
    const response: any = await this.projectRepository.list();
    this.currentProjects = response.projects;
    this.totalProjects = response.projects;
    this.loading = false;
  }

  searchFor(value: string): void {
    value.length >= 3
      ? (this.currentProjects = this.totalProjects.filter(
          (project) =>
            project.propertyName.toLowerCase().includes(value) ||
            project.programName.toLowerCase().startsWith(value)
        ))
      : (this.currentProjects = this.totalProjects);
  }

  toggleProjectScreen(): void {
    this.startANewProject = !this.startANewProject;
  }
}
