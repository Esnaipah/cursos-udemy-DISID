
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  CanMatchFn,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment } from '@angular/router';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';




const checkAuthStatus = (): Observable<boolean> => {

  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  return authService.checkAuth()
    .pipe(
      tap(isAuth => {
        if (!isAuth) {
          router.navigate(['/auth/login']);
        }
      })
    )

}



export const authCanActivateGuard: CanActivateFn = ( //Hay que tener en cuenta el tipado CanActiveFn
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {

  return checkAuthStatus();
};

export const authCanMatchGuard: CanMatchFn = ( //Tipado CanMatchFN
  route: Route,
  segments: UrlSegment[]
) => {

  return checkAuthStatus();
};
