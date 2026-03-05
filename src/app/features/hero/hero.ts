import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {
  private readonly data = inject(PortfolioDataService);

  readonly about = this.data.getAbout();
  readonly awards = this.about.awards.slice(0, 3);
}
