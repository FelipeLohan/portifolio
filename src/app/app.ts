import { Component, inject, afterNextRender } from '@angular/core';
import { Navbar } from './layout/navbar/navbar';
import { Footer } from './layout/footer/footer';
import { Hero } from './features/hero/hero';
import { About } from './features/about/about';
import { Experience } from './features/experience/experience';
import { Projects } from './features/projects/projects';
import { TechStack } from './features/tech-stack/tech-stack';
import { ThemeToggle } from './shared/components/theme-toggle/theme-toggle';
import { ScrollAnimationService } from './core/services/scroll-animation.service';

@Component({
  selector: 'app-root',
  imports: [Navbar, Footer, Hero, About, Experience, Projects, TechStack, ThemeToggle],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private readonly scrollAnim = inject(ScrollAnimationService);

  constructor() {
    afterNextRender(() => this.scrollAnim.observe());
  }
}
