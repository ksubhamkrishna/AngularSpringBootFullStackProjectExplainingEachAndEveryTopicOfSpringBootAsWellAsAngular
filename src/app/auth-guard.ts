import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, of } from 'rxjs';

interface UserTypeResponse {
  id: number;
  email: string;
  role: string;
}

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const http = inject(HttpClient);

  const token = localStorage.getItem('token');

  if (!token) {
    return router.createUrlTree(['/login']);
  }

  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`
  });

  

  return http.get<UserTypeResponse[]>(
    'http://localhost:8090/auth/user-type',
    { headers }
  ).pipe(
    map((users) => {
      const actualRole = users[0]?.role?.trim().toUpperCase();

      if (actualRole==='ADMIN' || actualRole === 'USER') {
        return true;
      }

      return router.createUrlTree(['/login']);
    }),
    catchError((err) => {
      console.error('Unable to verify user role:', err);
      return of(router.createUrlTree(['/login']));
    })
  );
};