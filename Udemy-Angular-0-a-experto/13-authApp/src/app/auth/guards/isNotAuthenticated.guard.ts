import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthStatus } from '../interfaces';

export const isNotAuthenticatedGuard: CanActivateFn = (route, state) => {

  // const url = state.url;
  const authService = inject(AuthService);
  const router = inject(Router);

  console.log(authService.authStatus());

  if(authService.authStatus() === AuthStatus.authenticated){
    router.navigateByUrl('/dashboard')

    return false;
  }

  // if(authService.authStatus() === AuthStatus.checking) return false;


  return true;
};
