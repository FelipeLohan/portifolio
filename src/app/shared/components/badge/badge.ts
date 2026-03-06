import { Component, input, computed } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.html',
  styleUrl: './badge.css'
})
export class Badge {
  label = input.required<string>();
  variant = input<'default' | 'accent' | 'success' | 'current'>('default');

  readonly variantClasses = computed(() => {
    const base = 'inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full tracking-wide whitespace-nowrap';
    const map: Record<string, string> = {
      default: 'bg-slate-100 text-slate-500 border border-slate-200',
      accent:  'bg-blue-50 text-blue-600 border border-blue-200',
      success: 'bg-green-50 text-green-600 border border-green-200',
      current: 'bg-sky-50 text-sky-600 border border-sky-200',
    };
    return `${base} ${map[this.variant()] ?? map['default']}`;
  });
}
