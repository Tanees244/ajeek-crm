import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../../core/services/breadcrumbs.service';

@Component({
  selector: 'app-breadcrumb',
  template: `
    <nav class="breadcrumb">
      <ng-container ngFor="let breadcrumb of breadcrumbs; let i = index">
        <p ngIf="i < breadcrumbs.length - 1">
          {{ breadcrumbs[1].label }}
        </p>
      </ng-container>
    </nav>
  `,
  styleUrls: []
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs: Array<{ label: string, url: string }> = [];

  constructor(private breadcrumbService: BreadcrumbService) { }

  ngOnInit(): void {
    this.breadcrumbService.breadcrumbs$.subscribe((breadcrumbs: Array<{ label: string, url: string }>) => {
      this.breadcrumbs = breadcrumbs;
    });
  }
}
