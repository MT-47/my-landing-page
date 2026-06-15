import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const canloginGuard: CanActivateFn = (route, state) => {
  let s = localStorage.getItem('isloggedin');
  if (s != null)
    return true;
  let router = inject(Router);
  router.navigate(['/login']);
  return false;
};
