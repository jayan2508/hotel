import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LocalStorage } from '../services/local-storage.service';
import { ERouterName } from '../helpers/enum/router.enum';

export const canActiveGuard: CanActivateFn = (route, state) => {
  // const localStorage = inject(LocalStorage);
  // const router = inject(Router);

  // const user = localStorage.getLcoalStorag('user');

  // // ❌ No token → login
  // if (!user.token) {
  //   router.navigate(['/login']);
  //   return false;
  // }

  // // 🔐 get role from token
  // const role = user.role;

  // // 🎯 route allowed roles
  // // const allowedRoles = route.data?.['superadmin','user'] as string[];

  // // ❌ role mismatch → unauthorized
  // // if (allowedRoles && !allowedRoles.includes(role)) {
  // // if (role) {
  // //   router.navigate([`/${role === 'supeadmin' ? ERouterName.Admin : ERouterName.Users}`]);
  // //   return false;
  // // }

  return true;
};
