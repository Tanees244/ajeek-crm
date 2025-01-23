import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { catchError, switchMap } from 'rxjs/operators';
import { throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);

  const accessToken = localStorage.getItem('accessToken');
  console.log('Access Token from Local Storage:', accessToken);

  const clonedRequest = accessToken
    ? req.clone({
      setHeaders: { Authorization: `Bearer ${accessToken}` }
    })
    : req;

  return next(clonedRequest).pipe(
    catchError((error) => {
      console.error('Error in HTTP Request:', error);

      if (error.status === 401) {
        return authService.refreshToken().pipe(
          switchMap((response: any) => {
            console.log('Token Refreshed Successfully:', response.accessToken);
            localStorage.setItem('accessToken', response.accessToken);

            const retryRequest = req.clone({
              setHeaders: { Authorization: `Bearer ${response.accessToken}` }
            });

            return next(retryRequest);
          }),
          catchError((refreshError) => {
            console.error('Error During Token Refresh:', refreshError);
            authService.logout();
            return throwError(() => refreshError);
          })
        );
      }

      return throwError(() => error);
    })
  );
};
