import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../../core/services/breadcrumbs.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-breadcrumb',
  template: `
    <nav class="breadcrumb">
      <ng-container *ngFor="let breadcrumb of breadcrumbs; let isLast = last">
        <a
          *ngIf="!isLast"
          [routerLink]="breadcrumb.url"
          class="breadcrumb-link"
        >
          {{ breadcrumb.label }}
        </a>
        <span *ngIf="isLast" class="breadcrumb-label">
          {{ breadcrumb.label }}
        </span>
        <span *ngIf="!isLast" class="breadcrumb-separator">/</span>
      </ng-container>
    </nav>
  `,
  imports: [RouterModule, CommonModule],
  styles: [
    `.breadcrumb-link,
     .breadcrumb-separator,
     .breadcrumb-label {
      color: #909090;
      font-weight: 400;
    }`
  ]
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs: Array<{ label: string; url: string }> = [];

  constructor(private breadcrumbService: BreadcrumbService) { }

  ngOnInit(): void {
    this.breadcrumbService.breadcrumbs$.subscribe(
      (breadcrumbs: Array<{ label: string; url: string }>) => {
        this.breadcrumbs = breadcrumbs;
      }
    );
  }
}
