import { Routes } from '@angular/router';
import { ERouterName } from '../helpers/enum/router.enum';

export const routes: Routes = [
  {
    path: ERouterName.Admin,
    loadComponent: () => import('./layouts/admin/admin').then((m) => m.Admin),
    children: [
      {
        path: ERouterName.Profile,
        loadComponent: () => import('../components/pages/profile/profile').then((c) => c.Profile),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: ERouterName.Profile,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: ERouterName.Auth,
      },
    ],
  },
  {
    path: ERouterName.Auth,
    loadComponent: () => import('./layouts/auth/login/login').then((m) => m.LoginComponent),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ERouterName.Auth,
  },
];
