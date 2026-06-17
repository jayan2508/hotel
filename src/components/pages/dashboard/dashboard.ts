import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../../services/header.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {
  constructor(private headerService: HeaderService) {}

  cards = [{}, {}, {}, {}];

  ngOnInit(): void {
    this.upadateHeaderTitle();
  }

  upadateHeaderTitle(): void {
    this.headerService.setHeaderTitle('Dashboard');
  }
}
