import { Component, input } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.html',
  styleUrl: './badge.css'
})
export class Badge {
  label = input.required<string>();
  variant = input<'default' | 'accent' | 'success' | 'current'>('default');
}
