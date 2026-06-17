import { Routes } from '@angular/router';
import { ERouterName } from '../helpers/enum/router.enum';
import { canActiveGuard } from '../guard/can-active-guard';

export const routes: Routes = [
  {
    path: ERouterName.Admin,
    loadComponent: () => import('./layouts/admin/admin').then((m) => m.Admin),
    children: [
      {
        path: ERouterName.Dashboard,
        loadComponent: () =>
          import('../components/pages/dashboard/dashboard').then((c) => c.Dashboard),
      },
      {
        path: ERouterName.Users,
        loadComponent: () => import('../components/pages/users/users').then((c) => c.Users),
      },
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
    canActivate: [canActiveGuard],
  },
  {
    path: ERouterName.Auth,
    loadComponent: () => import('./layouts/auth/login/login').then((m) => m.LoginComponent),
    canActivate: [canActiveGuard],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ERouterName.Auth,
  },
];
