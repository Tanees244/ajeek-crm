import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { catchError, switchMap } from 'rxjs/operators';
import { throwError } from 'rxjs';

let lastRefreshAttempt: number | null = null; // Tracks the last refresh attempt timestamp
const REFRESH_INTERVAL = 30000; // 30 seconds limit between refresh attempts

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);

  const accessToken = localStorage.getItem('accessToken');
  console.log('Access Token from Local Storage:', accessToken);

  const clonedRequest = accessToken
    ? req.clone({
      setHeaders: { Authorization: `Bearer ${accessToken}` },
    })
    : req;

  return next(clonedRequest).pipe(
    catchError((error) => {
      console.error('Error in HTTP Request:', error);

      if (error.status === 401) {
        const currentTime = Date.now();

        if (
          lastRefreshAttempt &&
          currentTime - lastRefreshAttempt < REFRESH_INTERVAL
        ) {
          console.warn(
            'Refresh Token Request Blocked: Too Frequent',
            currentTime - lastRefreshAttempt
          );
          return throwError(() => error);
        }

        lastRefreshAttempt = currentTime; // Update the last refresh attempt time

        return authService.refreshToken().pipe(
          switchMap((response: any) => {
            console.log('Token Refreshed Successfully:', response);

            // Save both accessToken and refreshToken, if returned
            if (response.accessToken) {
              localStorage.setItem('accessToken', response.accessToken);
            }
            if (response.refreshToken) {
              localStorage.setItem('refreshToken', response.refreshToken);
            }

            // Retry the failed request with the new access token
            const retryRequest = req.clone({
              setHeaders: { Authorization: `Bearer ${response.accessToken}` },
            });

            return next(retryRequest);
          }),
          catchError((refreshError) => {
            console.error('Error During Token Refresh:', refreshError);
            authService.logout(); // Logout user on refresh failure
            return throwError(() => refreshError);
          })
        );
      }

      return throwError(() => error);
    })
  );
};
