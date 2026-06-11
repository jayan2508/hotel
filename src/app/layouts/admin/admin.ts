import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "../header/header";
import { SideBar } from "../side-bar/side-bar";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterOutlet, Header, SideBar],
  templateUrl: './admin.html',
  styleUrl: './admin.scss',
})
export class Admin {}
