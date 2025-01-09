import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  private breadcrumbSubject = new BehaviorSubject<Array<{ label: string, url: string }>>([]);

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.buildBreadcrumbs(this.activatedRoute.root);
    });
  }

  private buildBreadcrumbs(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: Array<{ label: string, url: string }> = []
  ): void {
    const children: ActivatedRoute[] = route.children;

    for (const child of children) {
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      const routeData = child.snapshot.data;

      if (routeData && routeData['breadcrumb']) {
        const breadcrumb = {
          label: routeData['breadcrumb'],
          url: `${url}/${routeURL}`
        };
        breadcrumbs.push(breadcrumb);
      }

      if (child.children.length > 0) {
        this.buildBreadcrumbs(child, `${url}/${routeURL}`, breadcrumbs);
      } else {
        this.breadcrumbSubject.next(breadcrumbs);
      }
    }
  }

  get breadcrumbs$() {
    return this.breadcrumbSubject.asObservable();
  }
}
