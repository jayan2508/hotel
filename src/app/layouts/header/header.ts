import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../components/form-controls/button.component/button.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [ButtonComponent, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  pageName = 'Dashboard';
  selectedTheme = 'light';
  themeData = [
    { activeIcon: 'icons/light-active.svg', inactiveIcon: 'icons/light.svg', value: 'light' },
    { activeIcon: 'icons/dark-active.svg', inactiveIcon: 'icons/dark.svg', value: 'dark' },
  ];

  constructor() {}

  ngOnInit() {}

  toggleTheme(theme: string) {
    this.selectedTheme = theme;
  }
}
