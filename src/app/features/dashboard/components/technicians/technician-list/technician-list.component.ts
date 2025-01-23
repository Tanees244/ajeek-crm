import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonComponent } from '../../../../../shared/components/button/button.component';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule, MatPaginator, PageEvent } from '@angular/material/paginator';

interface Technician {
  id: string;
  registeredAt: string;
  technicianName: string;
  iqamaNumber: string;
  iqamaExpiryDate: string;
  contactInformation: string;
  yearsOfExperience: string;
}

@Component({
  selector: 'app-technician-list',
  imports: [CommonModule, ButtonComponent, FormsModule, MatPaginatorModule, RouterModule],
  templateUrl: './technician-list.component.html',
  styles: [` 
    ::ng-deep .mat-mdc-paginator-page-size-label,
    ::ng-deep .mat-mdc-paginator-page-size-value,
    ::ng-deep .mat-mdc-paginator-range-label,
    ::ng-deep .mat-mdc-paginator-page-size{
      display:none;
    }
  `]
})
export class TechnicianListComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private router: Router) { }

  technicians: Technician[] = [
    {
      id: 'TECH-001',
      registeredAt: '2024-12-19',
      technicianName: 'Hassan Al-Omari',
      iqamaNumber: '2437-8956-4321',
      iqamaExpiryDate: '2030-12-19',
      contactInformation: '+966 50 123 4567',
      yearsOfExperience: '05+ Years'
    },
    {
      id: 'TECH-002',
      registeredAt: '2024-12-19',
      technicianName: 'Faisal Al-Harbi',
      iqamaNumber: '9876-5432-1098',
      iqamaExpiryDate: '2029-12-19',
      contactInformation: '+966 55 987 6543',
      yearsOfExperience: '04+ Years'
    },
    {
      id: 'TECH-002',
      registeredAt: '2024-12-19',
      technicianName: 'Faisal Al-Harbi',
      iqamaNumber: '9876-5432-1098',
      iqamaExpiryDate: '2029-12-19',
      contactInformation: '+966 55 987 6543',
      yearsOfExperience: '04+ Years'
    },
    {
      id: 'TECH-002',
      registeredAt: '2024-12-19',
      technicianName: 'Faisal Al-Harbi',
      iqamaNumber: '9876-5432-1098',
      iqamaExpiryDate: '2029-12-19',
      contactInformation: '+966 55 987 6543',
      yearsOfExperience: '04+ Years'
    },
    {
      id: 'TECH-002',
      registeredAt: '2024-12-19',
      technicianName: 'Faisal Al-Harbi',
      iqamaNumber: '9876-5432-1098',
      iqamaExpiryDate: '2029-12-19',
      contactInformation: '+966 55 987 6543',
      yearsOfExperience: '04+ Years'
    },
    {
      id: 'TECH-002',
      registeredAt: '2024-12-19',
      technicianName: 'Faisal Al-Harbi',
      iqamaNumber: '9876-5432-1098',
      iqamaExpiryDate: '2029-12-19',
      contactInformation: '+966 55 987 6543',
      yearsOfExperience: '04+ Years'
    },
    {
      id: 'TECH-002',
      registeredAt: '2024-12-19',
      technicianName: 'Faisal Al-Harbi',
      iqamaNumber: '9876-5432-1098',
      iqamaExpiryDate: '2029-12-19',
      contactInformation: '+966 55 987 6543',
      yearsOfExperience: '04+ Years'
    },
    {
      id: 'TECH-002',
      registeredAt: '2024-12-19',
      technicianName: 'Faisal Al-Harbi',
      iqamaNumber: '9876-5432-1098',
      iqamaExpiryDate: '2029-12-19',
      contactInformation: '+966 55 987 6543',
      yearsOfExperience: '04+ Years'
    },
    {
      id: 'TECH-002',
      registeredAt: '2024-12-19',
      technicianName: 'Faisal Al-Harbi',
      iqamaNumber: '9876-5432-1098',
      iqamaExpiryDate: '2029-12-19',
      contactInformation: '+966 55 987 6543',
      yearsOfExperience: '04+ Years'
    },
    {
      id: 'TECH-002',
      registeredAt: '2024-12-19',
      technicianName: 'Faisal Al-Harbi',
      iqamaNumber: '9876-5432-1098',
      iqamaExpiryDate: '2029-12-19',
      contactInformation: '+966 55 987 6543',
      yearsOfExperience: '04+ Years'
    },
    {
      id: 'TECH-002',
      registeredAt: '2024-12-19',
      technicianName: 'Faisal Al-Harbi',
      iqamaNumber: '9876-5432-1098',
      iqamaExpiryDate: '2029-12-19',
      contactInformation: '+966 55 987 6543',
      yearsOfExperience: '04+ Years'
    },
    {
      id: 'TECH-002',
      registeredAt: '2024-12-19',
      technicianName: 'Faisal Al-Harbi',
      iqamaNumber: '9876-5432-1098',
      iqamaExpiryDate: '2029-12-19',
      contactInformation: '+966 55 987 6543',
      yearsOfExperience: '04+ Years'
    },
    {
      id: 'TECH-002',
      registeredAt: '2024-12-19',
      technicianName: 'Faisal Al-Harbi',
      iqamaNumber: '9876-5432-1098',
      iqamaExpiryDate: '2029-12-19',
      contactInformation: '+966 55 987 6543',
      yearsOfExperience: '04+ Years'
    },
    {
      id: 'TECH-002',
      registeredAt: '2024-12-19',
      technicianName: 'Faisal Al-Harbi',
      iqamaNumber: '9876-5432-1098',
      iqamaExpiryDate: '2029-12-19',
      contactInformation: '+966 55 987 6543',
      yearsOfExperience: '04+ Years'
    },
  ];


  filteredTechnicians: Technician[] = [];
  pageSize = 5;
  pageSizeOptions = [5, 10, 25, 50];
  selectedExperience = '';
  searchQuery = '';
  totalItems = 0;
  currentPageRange = '';
  currentPage = 1;

  ngOnInit() {
    this.updateDisplayedTechnicians();
  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.paginator.page.subscribe(() => {
        this.updateDisplayedTechnicians();
      });
    }
  }

  // Optimized updatePageRange method
  updatePageRange() {
    const startIndex = this.paginator ? this.paginator.pageIndex * this.paginator.pageSize + 1 : 1;
    const endIndex = Math.min(startIndex + this.pageSize - 1, this.totalItems);
    this.currentPageRange = `Showing ${startIndex} - ${endIndex} of ${this.totalItems} entries`;
  }

  onPageSizeChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.pageSize = parseInt(select.value);
    if (this.paginator) {
      this.paginator.pageSize = this.pageSize;
      this.paginator.pageIndex = 0;
    }
    this.updateDisplayedTechnicians();
  }

  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex + 1;
    this.updateDisplayedTechnicians();
  }

  onSearch(): void {
    if (this.paginator) {
      this.paginator.firstPage();
    }
    this.updateDisplayedTechnicians();
  }

  onExperienceChange(event: any): void {
    this.selectedExperience = event.target.value;
    if (this.paginator) {
      this.paginator.firstPage();
    }
    this.updateDisplayedTechnicians();
  }

  private getFilteredTechnicians(): Technician[] {
    return this.technicians.filter(tech => {
      const matchesSearch = this.searchQuery ? tech.iqamaNumber.toLowerCase().includes(this.searchQuery.toLowerCase()) : true;
      const matchesExperience = this.selectedExperience ? this.filterByExperience(tech.yearsOfExperience, this.selectedExperience) : true;
      return matchesSearch && matchesExperience;
    });
  }

  updateDisplayedTechnicians() {
    const filteredTechnicians = this.getFilteredTechnicians();
    this.totalItems = filteredTechnicians.length;

    const startIndex = this.paginator ? this.paginator.pageIndex * this.paginator.pageSize : 0;
    const endIndex = startIndex + (this.paginator ? this.paginator.pageSize : this.pageSize);

    this.filteredTechnicians = filteredTechnicians.slice(startIndex, endIndex);
    this.updatePageRange();
  }

  private filterByExperience(techExp: string, filter: string): boolean {
    const years = parseInt(techExp);
    switch (filter) {
      case '1-week': return years < 1;
      case '2-weeks': return years >= 1 && years < 2;
      case '1-month': return years >= 2;
      default: return true;
    }
  }

  navigateToTechnicianProfile(techId: string): void {
    this.router.navigate([`/dashboard/technicians/technician/${techId}`]);
  }
}
