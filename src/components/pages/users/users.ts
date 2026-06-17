import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../../services/header.service';
import { Table } from "../../features/table/table";

@Component({
  selector: 'app-users',
  imports: [Table],
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class Users implements OnInit {
  constructor(private headerService: HeaderService) {}
  cards = [{}, {}, {}, {}];

  employees = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `Employee ${i + 1}`,
    role: i % 2 === 0 ? 'Developer' : 'Designer',
    salary: 30000 + i * 1000,
  }));

  ngOnInit(): void {
    this.upadateHeaderTitle();
  }

  upadateHeaderTitle(): void {
    this.headerService.setHeaderTitle('Users');
  }
}
