import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidebarItem } from './side-bar-data';

@Component({
  selector: 'app-side-bar',
  imports: [RouterLink],
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.scss',
})
export class SideBar {
  SidebarItem = SidebarItem;

  isExpand = false;

  openSideBar(): void {
    this.isExpand = !this.isExpand;
  }
}
