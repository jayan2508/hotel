import { CommonModule } from '@angular/common';
import { Component, DestroyRef } from '@angular/core';
import { HeaderService } from '../../../services/header.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { interval, map, startWith } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  pageName = 'Dashboard';
  selectedTheme = 'light';

  themeData = [
    {
      id: 1,
      activeIcon: 'icons/light-active.svg',
      inactiveIcon: 'icons/light.svg',
      value: 'light',
    },
    { id: 2, activeIcon: 'icons/dark-active.svg', inactiveIcon: 'icons/dark.svg', value: 'dark' },
  ];

  // ONLY LIVE TIME (updates every second)
  private now = toSignal(
    interval(1000).pipe(
      startWith(0),
      map(() => new Date()),
    ),
    { initialValue: new Date() },
  );

  // STATIC VALUES
  readonly greeting = this.getGreeting();
  readonly date = this.formatDate(new Date());

  // time getter (only this updates)
  get time(): string {
    return this.now().toLocaleTimeString('en-US');
  }

  private getGreeting(): string {
    const hour = new Date().getHours();

    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';

    return 'Good Evening';
  }

  private formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }

  constructor(
    protected headerService: HeaderService,
    private destroyRef: DestroyRef,
  ) {}

  ngOnInit() {}

  toggleTheme(theme: string): void {
    this.selectedTheme = theme;
  }
}
