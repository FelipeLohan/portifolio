import { Component, input } from '@angular/core';
import { Project } from '../../../../core/models/project.model';
import { Badge } from '../../../../shared/components/badge/badge';

@Component({
  selector: 'app-project-card',
  imports: [Badge],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css'
})
export class ProjectCard {
  project = input.required<Project>();
}
