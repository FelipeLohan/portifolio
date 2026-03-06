import { Component, signal, HostListener, inject } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  menuOpen = signal(false);
  scrolled = signal(false);
  readonly theme = inject(ThemeService);

  readonly navLinks = [
    { label: 'Sobre', anchor: '#about' },
    { label: 'Experiência', anchor: '#experience' },
    { label: 'Projetos', anchor: '#projects' },
    { label: 'Tecnologias', anchor: '#tech-stack' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 20);
  }

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
