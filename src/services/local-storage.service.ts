import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorage {
  constructor() {}

  public setLcoalStorag(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public getLcoalStorag(key: string): any {
    return localStorage.getItem(key);
  }
}
