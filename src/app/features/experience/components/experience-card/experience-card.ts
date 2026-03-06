import { Component, input } from '@angular/core';
import { Experience } from '../../../../core/models/experience.model';
import { Badge } from '../../../../shared/components/badge/badge';

@Component({
  selector: 'app-experience-card',
  imports: [Badge],
  templateUrl: './experience-card.html',
  styleUrl: './experience-card.css'
})
export class ExperienceCard {
  experience = input.required<Experience>();
}
