import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { SectionTitle } from '../../shared/components/section-title/section-title';
import { ExperienceCard } from './components/experience-card/experience-card';

@Component({
  selector: 'app-experience',
  imports: [SectionTitle, ExperienceCard],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience {
  private readonly data = inject(PortfolioDataService);

  readonly experiences = this.data.getExperiences();
}
