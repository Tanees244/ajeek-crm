import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { BaseApiService } from './base-api.service';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private apiService: BaseApiService) { }

  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.apiService.post<any>('auth', 'IAuthFeature', 'login', body);
  }

  refreshToken(): Observable<any> {
    const refreshToken = localStorage.getItem('refreshToken');
    if (refreshToken) {
      const body = { refreshToken };
      return this.apiService.post<any>('auth', 'IAuthFeature', 'RefreshToken', body);
    }
    return throwError(() => new Error('No refresh token found'));
  }

  logout(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }
}
