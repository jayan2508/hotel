import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../../pipe/filter-pipe';

@Component({
  selector: 'app-table',
  imports: [FormsModule, FilterPipe],
  templateUrl: './table.html',
  styleUrl: './table.scss',
})
export class Table {
  searchText = '';



  users = [
    {
      name: 'Admin User',
      email: 'admin@peopleos.io',
      role: 'Super Admin',
      status: 'Active',
      lastLogin: '2h ago',
      avatar: 'https://i.pravatar.cc/100?img=1',
    },
    {
      name: 'Priya Sharma',
      email: 'priya@peopleos.io',
      role: 'HR Admin',
      status: 'Active',
      lastLogin: '1d ago',
      avatar: 'https://i.pravatar.cc/100?img=5',
    },
    {
      name: 'Marcus Williams',
      email: 'marcus@peopleos.io',
      role: 'Manager',
      status: 'Active',
      lastLogin: '3h ago',
      avatar: 'https://i.pravatar.cc/100?img=12',
    },
    {
      name: 'Yuki Tanaka',
      email: 'yuki@peopleos.io',
      role: 'Viewer',
      status: 'Inactive',
      lastLogin: '14d ago',
      avatar: 'https://i.pravatar.cc/100?img=15',
    },
    {
      name: 'Carlos Méndez',
      email: 'carlos@peopleos.io',
      role: 'Manager',
      status: 'On Leave',
      lastLogin: '5d ago',
      avatar: 'https://i.pravatar.cc/100?img=20',
    },
  ];

  showColumn = [
  
    
    'name', 'email', 'role', 'status', 'lastLogin', 'actions'
  
  
  ];

  getRoleClass(role: string) {
    switch (role) {
      case 'Super Admin':
        return 'super-admin';
      case 'HR Admin':
        return 'hr-admin';
      case 'Manager':
        return 'manager';
      default:
        return 'viewer';
    }
  }

  getStatusClass(status: string) {
    switch (status) {
      case 'Active':
        return 'active';
      case 'Inactive':
        return 'inactive';
      default:
        return 'leave';
    }
  }
}
