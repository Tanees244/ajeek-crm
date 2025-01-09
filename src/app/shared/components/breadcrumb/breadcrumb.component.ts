import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../../core/services/breadcrumbs.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: []
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs: Array<{ label: string, url: string }> = [];

  constructor(private breadcrumbService: BreadcrumbService) { }

  ngOnInit(): void {
    this.breadcrumbService.breadcrumbs$.subscribe((breadcrumbs: Array<{ label: string, url: string }>) => {
      console.log(breadcrumbs); // Debugging: Log the breadcrumbs array
      this.breadcrumbs = breadcrumbs;
    });
  }
}
