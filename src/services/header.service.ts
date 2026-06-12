import { DestroyRef, Injectable, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BehaviorSubject, distinctUntilChanged, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  readonly headerTitle = signal<string>('Dashboard');

  setHeaderTitle(headerTitle: string): void {
    this.headerTitle.set(headerTitle);
  }
}
