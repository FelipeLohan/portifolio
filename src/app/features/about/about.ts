import { Component, inject, signal, computed } from '@angular/core';
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

  readonly highlights = [
    { icon: '🏗️', label: 'Arquitetura de Software' },
    { icon: '☁️', label: 'Cloud & DevOps' },
    { icon: '🔗', label: 'Microsserviços' },
    { icon: '🏆', label: 'Hackathons' },
    { icon: '⚡', label: 'Alta Performance' },
  ];

  readonly currentIndex = signal(0);
  readonly currentAward = computed(() => this.about.awards[this.currentIndex()]);

  next(): void {
    this.currentIndex.update(i => (i + 1) % this.about.awards.length);
  }

  prev(): void {
    this.currentIndex.update(i => (i - 1 + this.about.awards.length) % this.about.awards.length);
  }

  goTo(index: number): void {
    this.currentIndex.set(index);
  }
}
