import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MetricCardComponent } from '../../../../shared/components/metric-card/metric-card.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { NgChartsModule } from 'ng2-charts';
import { Chart, ChartConfiguration, ChartData, ChartType } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';
 
@Component({
  selector: 'app-partner-dashboard',
  imports: [MetricCardComponent, ButtonComponent, NgChartsModule, CommonModule, TranslatePipe],
  templateUrl: './partner-dashboard.component.html',
})
export class PartnerDashboardComponent {
  pendingTickets: number = 90;
  resolvedTickets: number = 150;

  constructor(private router: Router) { } 

  navigateToRegisterTicket(): void {
    this.router.navigate(['/dashboard/tickets/register-ticket']);
  }

  public barChartData: ChartData<'bar'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Pending Tickets',
        data: [150, 190, 160, 140, 130, 140, 130, 150, 140, 160, 150, 130],
        backgroundColor: 'rgba(255, 185, 70, 0.8)',
        borderColor: 'rgb(255, 185, 70)',
        borderWidth: 2,
        //borderRadius: 5,
        hoverBackgroundColor: 'rgba(255, 185, 70, 1)',
        barThickness: 4
      },
      {
        label: 'Active Tickets',
        data: [100, 120, 110, 100, 90, 100, 90, 110, 100, 120, 110, 90],
        backgroundColor: 'rgba(46, 212, 122, 0.8)',
        borderColor: 'rgb(46, 212, 122)',
        borderWidth: 2,
        //borderRadius: 5,
        hoverBackgroundColor: 'rgba(46, 212, 122, 1)',
        barThickness: 4
      }
    ]
  };

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false
        },
        ticks: {
          font: {
            size: 12,
            family: "'Inter', sans-serif"
          }
        }
      },
      y: {
        stacked: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
          //drawBorder: false
        },
        ticks: {
          font: {
            size: 12,
            family: "'Inter', sans-serif"
          }
        }
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          padding: 20,
          font: {
            size: 12,
            family: "'Inter', sans-serif"
          },
          usePointStyle: true,
          pointStyle: 'circle'
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 12,
        titleFont: {
          size: 13,
          family: "'Inter', sans-serif"
        },
        bodyFont: {
          size: 12,
          family: "'Inter', sans-serif"
        },
        displayColors: true,
        cornerRadius: 6
      }
    }
  };

  public barChartPlugins = [];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: ['In Progress', 'Pending', 'Completed'],
    datasets: [{
      data: [7321, 5023, 3393],
      backgroundColor: ['#2196F3', '#FFB946', '#2ED47A']
    }]
  };

  public doughnutChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom'
      }
    },
    //radius: '90%'
  };

  public doughnutChartPlugins = [];

  public priorities = [
    { name: 'High Priority', value: 56, colorClass: 'bg-red-500' },
    { name: 'Medium Priority', value: 24, colorClass: 'bg-yellow-500' },
    { name: 'Low Priority', value: 20, colorClass: 'bg-green-500' },
    { name: 'None', value: 0, colorClass: 'bg-gray-300' }
  ];
}
