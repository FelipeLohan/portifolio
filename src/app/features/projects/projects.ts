import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { SectionTitle } from '../../shared/components/section-title/section-title';
import { ProjectCard } from './components/project-card/project-card';

@Component({
  selector: 'app-projects',
  imports: [SectionTitle, ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  private readonly data = inject(PortfolioDataService);

  readonly projects = this.data.getProjects();
}
