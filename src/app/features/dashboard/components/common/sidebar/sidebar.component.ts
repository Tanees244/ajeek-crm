import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { CrmRouterService } from '../../../../../core/services/crm-router.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: []
})
export class SidebarComponent {
  constructor(private crmRouter: CrmRouterService) { }

  @Input() isCollapsed: boolean = false;
  logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.clear();
    this.crmRouter.navigate(['login']); 
  }
}
