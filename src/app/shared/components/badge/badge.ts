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
      default: 'bg-slate-100 dark:bg-warm-700 text-slate-500 dark:text-warm-400 border border-slate-200 dark:border-warm-600',
      accent:  'bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800',
      success: 'bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-800',
      current: 'bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800',
    };
    return `${base} ${map[this.variant()] ?? map['default']}`;
  });
}
