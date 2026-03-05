import { Component, inject } from '@angular/core';
import { TechCategory } from '../../core/models/tech.model';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { SectionTitle } from '../../shared/components/section-title/section-title';
import { Badge } from '../../shared/components/badge/badge';

interface TechGroup {
  category: TechCategory;
  label: string;
  icon: string;
  techs: string[];
}

@Component({
  selector: 'app-tech-stack',
  imports: [SectionTitle, Badge],
  templateUrl: './tech-stack.html',
  styleUrl: './tech-stack.css'
})
export class TechStack {
  private readonly data = inject(PortfolioDataService);

  readonly groups: TechGroup[] = this.buildGroups();

  private buildGroups(): TechGroup[] {
    const all = this.data.getTechs();
    const meta: { category: TechCategory; label: string; icon: string }[] = [
      { category: 'backend',      label: 'Back-end',       icon: '🔧' },
      { category: 'frontend',     label: 'Front-end',      icon: '🎨' },
      { category: 'database',     label: 'Banco de Dados', icon: '🗄️' },
      { category: 'devops',       label: 'DevOps / Cloud', icon: '☁️' },
      { category: 'architecture', label: 'Arquiteturas',   icon: '🏗️' },
    ];
    return meta.map(m => ({
      ...m,
      techs: all.filter(t => t.category === m.category).map(t => t.name),
    }));
  }
}
