import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'view-projects',
  templateUrl: './projects-view.template.html',
  styleUrls: ['./projects-view.style.scss'],
})
export class ProjectsView {
  loading = true;
  currentProjects: Record<string, any>[] = [];
  totalProjects: Record<string, any>[] = [];

  constructor(private readonly httpClient: HttpClient) {}

  async ngOnInit(): Promise<void> {
    const response = await this.httpClient
      .get('https://54.88.119.168.nip.io/api/projects', {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc4YjhhNjExLTY5MmQtNDFkOC1hMjcxLWQ4NTYxNTA3ZjZlNSIsImlhdCI6MTY5NDEyODk3NywiZXhwIjoxNjk0MjE1Mzc3fQ.QFn95qMFRhIDj-5C7BE6yFdvn69iam-rwNwuhGCsQgc',
        },
      })
      .subscribe((res: any) => {
        this.currentProjects = res.projects;
        this.totalProjects = res.projects;
        this.loading = false;
      });

    console.log(response);
  }

  searchFor(value: string): void {
    value.length >= 3
      ? (this.currentProjects = this.totalProjects.filter((project) =>
          project.propertyName.toLowerCase().includes(value)
        ))
      : (this.currentProjects = this.totalProjects);
  }
}
