import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface KpiMetric {
  title: string;
  value: number;
  unit: string;
  trend: number;
  imgSrc: string;
}

@Injectable({
  providedIn: 'root',
})
export class KpiService {
  constructor() { }

  // Mock KPI data
  private kpiMetrics: KpiMetric[] = [
    {
      title: 'Total Tickets',
      value: 100239,
      unit: '',
      trend: 19.01,
      imgSrc: 'assets/kpiLogo/tickets.svg',
    },
    {
      title: 'Avg. Res Rate',
      value: 89,
      unit: '%',
      trend: 19.01,
      imgSrc: 'assets/kpiLogo/resRate.svg',
    },
    {
      title: 'Conversion Rate',
      value: 96,
      unit: '%',
      trend: 19.01,
      imgSrc: 'assets/kpiLogo/conversionRate.svg',
    },
    {
      title: 'Active Technicians',
      value: 96,
      unit: '%',
      trend: -19.01,
      imgSrc: 'assets/kpiLogo/technicians.svg',
    },
  ];

  // Fetch KPI data
  getKpiMetrics(): Observable<KpiMetric[]> {
    return of(this.kpiMetrics);
  }
}
