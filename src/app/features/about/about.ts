import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { SectionTitle } from '../../shared/components/section-title/section-title';

@Component({
  selector: 'app-about',
  imports: [SectionTitle],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  private readonly data = inject(PortfolioDataService);

  readonly about = this.data.getAbout();
  readonly currentJob = this.data.getExperiences().find(e => e.current);
}
