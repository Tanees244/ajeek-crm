import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CrmRouterService {
  constructor(private router: Router) { }

  navigate(path: string | any[], extras?: any): void {
    if (typeof path === 'string') {
      path = [path]; 
    } else if (Array.isArray(path)) {
      path = ['/crm', ...path]; 
    }

    this.router.navigate(path, extras);
  }
}
