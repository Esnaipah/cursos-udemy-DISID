

import { inject } from '@angular/core';
import { CanActivateFn, CanMatchFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable, catchError, map, of, tap } from 'rxjs';



const checkIfLogged = (): Observable<boolean> => {

  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  return authService.checkAuth()
    .pipe(
      tap(isAuth => console.log(isAuth)),
      tap(isLogged => { if (isLogged) router.navigate(['/']) }),
      map(isAuth => !isAuth)
    );

}

export const publicCanMatch: CanMatchFn = () => {


  return checkIfLogged();
  // return true;

}

export const publicCanActivate: CanActivateFn = () => {


  return checkIfLogged();
  // return true;

}
