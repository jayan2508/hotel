import { ISidebarItem } from '../../../helpers/interface/side-bar.interface';

export const SidebarItem: ISidebarItem[] = [
  {
    id: 1,
    label: 'Dashboard',
    icon: 'dashboard',
    route: 'dashboard',
  },
  {
    id: 2,
    label: 'Users',
    icon: 'users',
    route: 'users',
  },
  {
    id: 3,

    label: 'Products',
    icon: 'school',
    route: 'products',
  },
  {
    id: 4,

    label: 'Orders',
    icon: 'calendar-range',
    route: 'orders',
  },
  {
    id: 5,

    label: 'Reports',
    icon: 'clock',
    route: 'reports',
  },
  {
    id: 6,

    label: 'Settings',
    icon: 'settings',
    route: 'settings',
    children: [
      {
        label: 'Profile',
        icon: 'profile',
        route: '/settings/profile',
      },
      {
        label: 'Security',
        icon: 'security',
        route: '/settings/security',
      },
    ],
  },
];
