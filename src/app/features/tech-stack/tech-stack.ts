import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { SectionTitle } from '../../shared/components/section-title/section-title';

@Component({
  selector: 'app-tech-stack',
  imports: [SectionTitle],
  templateUrl: './tech-stack.html',
  styleUrl: './tech-stack.css'
})
export class TechStack {
  private readonly data = inject(PortfolioDataService);

  readonly techs = this.data.getTechs();
}
