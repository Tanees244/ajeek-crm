import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonComponent } from '../../../../../shared/components/button/button.component';
import { CommonModule } from '@angular/common';
import { Tickets } from '../technician-details/tickets.type'
import { NgChartsModule } from 'ng2-charts';
import { Chart, ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { MetricCardComponent } from '../../../../../shared/components/metric-card/metric-card.component';

interface TechnicianPerformance {
  month: string;
  value: number;
}

interface TechnicianTicket {
  id: string;
  createdAt: string;
  priority: string;
  assignedAt: string;
  status: string;
}

interface SparePart {
  name: string;
  description: string;
  quantity: string;
}  

interface SparePartsRequest {
  date: string;
  ticketId: string;
  status: string;
  visitType: string;
  spareParts: SparePart[];
}

interface Technician {
  id: string;
  phoneNumber: string;
  email: string;
  iqamaNumber: string;
  expiryDate: string;
  birthDate: string;
  address: string;
  skills: string[];
  expertiseType: string[];
  performance: TechnicianPerformance[];
  monthlyStats: {
    inProgress: number;
    pending: number;
    completed: number;
    totalTickets: number;
  };
  productivity: {
    minimumTickets: number;
    ticketCompleted: number;
    weeklyAverage: number;
  };
  availability: {
    startTime: string;
    endTime: string;
    totalHours: string;
  };
  tickets: TechnicianTicket[];
  sparePartsRequests: SparePartsRequest[];
}

@Component({
  selector: 'app-technician-details',
  templateUrl: './technician-details.component.html',
  imports: [CommonModule, NgChartsModule, MetricCardComponent],
  styleUrl: './technician-details.component.css',
  standalone: true
})
export class TechnicianDetailsComponent implements OnInit {
 
  @ViewChild('tierPointsValue', { static: false }) tierPointsValue!: ElementRef;
  @ViewChild('targetChart', { static: false }) targetChart!: ElementRef;

  totalPoints: number = 1000; 
  differenceValue: number = 4500;
  tierLevelPoints: number = 17999;
  dataPercentage: string = '0';

  barColor: string = '#0ebc01'; 
  trackColor: string = '#e5e5e5';

  ngAfterViewInit(): void {
    const calculatePointsPercentage =
      ((this.totalPoints - this.differenceValue) /
        (this.tierLevelPoints - this.differenceValue)) *
      100;
    this.dataPercentage = calculatePointsPercentage.toFixed(0);

    this.tierPointsValue.nativeElement.setAttribute(
      'data-percent',
      this.dataPercentage
    );

    this.drawPieChart();
    this.animateCounter();
  }

  drawPieChart(): void {
    const canvas = this.targetChart.nativeElement as HTMLCanvasElement;
    const context = canvas.getContext('2d');

    const size = 200;
    const lineWidth = 8;
    const radius = (size - lineWidth) / 2;

    if (context) {
      context.clearRect(0, 0, size, size);

      context.beginPath();
      context.arc(
        size / 2,
        size / 2,
        radius,
        0,
        2 * Math.PI
      );
      context.strokeStyle = this.trackColor;
      context.lineWidth = lineWidth;
      context.stroke();

      const progress = parseInt(this.dataPercentage) / 100;
      context.beginPath();
      context.arc(
        size / 2,
        size / 2,
        radius,
        -Math.PI / 2,
        -Math.PI / 2 + 2 * Math.PI * progress
      );
      context.strokeStyle = this.barColor;
      context.lineWidth = lineWidth;
      context.stroke();
    }
  }

  animateCounter(): void {
    const totalTierPointsElement =
      document.querySelector('.totalTierPoints') as HTMLElement;

    if (totalTierPointsElement) {
      const targetValue = this.totalPoints; 
      const duration = 2000;
      const frameRate = 60;
      const stepTime = duration / frameRate;
      let counter = 0;

      const interval = setInterval(() => {
        counter += Math.ceil(targetValue / frameRate);
        if (counter >= targetValue) {
          counter = targetValue;
          clearInterval(interval);
        }
        totalTierPointsElement.textContent = counter.toString();
      }, stepTime);
    }
  }
  

  ticket: Tickets [] = [
    {
       ticketId: 10931235,
        createdAt: '2025-1-22',
        priority: 'Low',
        assignedAt: '2025-1-22',
        status: 'In Progress'
    },

     {
       ticketId: 10931235,
        createdAt: '2025-1-22',
        priority: 'Medium',
        assignedAt: '2025-1-22',
        status: 'Completed'
    },

     {
       ticketId: 10931235,
        createdAt: '2025-1-22',
        priority: 'Low',
        assignedAt: '2025-1-22',
        status: 'In Progress'
    },

     {
       ticketId: 10931235,
        createdAt: '2025-1-22',
        priority: 'High',
        assignedAt: '2025-1-22',
        status: 'Pending'
    },

     {
       ticketId: 10931235,
        createdAt: '2025-1-22',
        priority: 'Low',
        assignedAt: '2025-1-22',
        status: 'Pending'
    },

     {
       ticketId: 10931235,
        createdAt: '2025-1-22',
        priority: 'Low',
        assignedAt: '2025-1-22',
        status: 'Completed'
    }
  ]

  technician: Technician = {
    id: 'TECH-001',
    phoneNumber: '+966 50 123 4567',
    email: 'tech@example.com',
    iqamaNumber: '2437-8956-4321',
    birthDate: '1990-12-9',
    expiryDate:'2030-12-19',
    address: '#567 Al Olya Street, Riyadh 122, Building 2, Suite 3',
    skills: ['HVAC Efficiency Test, Efficiency, Troubleshooting'],
    expertiseType: ['Air Conditioning (AC), Washing Machine, Refrigerator, Juicer'],
    performance: [
      { month: 'Jan', value: 45 },
      { month: 'Feb', value: 52 },
      { month: 'Mar', value: 49 },
      { month: 'Apr', value: 63 },
      { month: 'May', value: 58 },
      { month: 'Jun', value: 64 },
      { month: 'Jul', value: 75 }
    ],
    monthlyStats: {
      inProgress: 10,
      pending: 5,
      completed: 20,
      totalTickets: 35
    },
    productivity: {
      minimumTickets: 96,
      ticketCompleted: 89,
      weeklyAverage: 7.3
    },
    availability: {
      startTime: '8:45 AM',
      endTime: '5:45 PM',
      totalHours: '9.0'
    },
    tickets: [
      {
        id: '12051235',
        createdAt: '2024-12-19',
        priority: 'High Priority',
        assignedAt: '2024-12-19',
        status: 'In Progress'
      },
      // Add more tickets as needed
    ],
    sparePartsRequests: [
      {
        date: 'Jan 5th, 2025',
        ticketId: '10931235',
        status: 'Pending Approval',
        visitType: 'Pre-Visit Request',
        spareParts: [
          {
            name: 'Compressor',
            description: 'LRA-094 Split AC Compressor',
            quantity: '1'
          },
          {
            name: 'Capacitor',
            description: 'Capacitor 450V 6.0 for AC',
            quantity: '2'
          }
        ]
      }
    ]
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const technicianId = params['id'];
      // In real app, fetch technician details using service
      // this.technicianService.getTechnicianDetails(technicianId).subscribe(...)
    });
  }

  navigateBack(): void {
    this.router.navigate(['/dashboard/technicians']);
  }

  calculateCompletionPercentage(): number {
    return (this.technician.productivity.ticketCompleted /
      this.technician.productivity.minimumTickets) * 100;
  }

  getStatusColor(status: string): string {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in progress':
        return 'bg-blue-100 text-blue-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }

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

  
  getPriorityStyles(priority: string): { bgColor: string; icon: string } {
    switch (priority) {
      case 'High':
        return { bgColor: '#FDE6E6', icon: 'assets/icons/redFlag.svg' };
      case 'Medium':
        return { bgColor: '#FFF39A', icon: 'assets/icons/yellowFlag.svg' };
      case 'Low':
        return { bgColor: '#E8FDE6', icon: 'assets/icons/greenFlag.svg' };
      default:
        return { bgColor: '', icon: '' };
    }
  }
}
