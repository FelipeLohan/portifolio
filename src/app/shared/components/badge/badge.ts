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
      default: 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-600',
      accent:  'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800',
      success: 'bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-800',
      current: 'bg-sky-50 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-800',
    };
    return `${base} ${map[this.variant()] ?? map['default']}`;
  });
}
