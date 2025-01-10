import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-metric-card',
  standalone: true,
  
  templateUrl: './metric-card.component.html',
  styleUrl: './metric-card.component.css'
})
export class MetricCardComponent {
  @Input() title!: string;
  @Input() value!: number;
  @Input() unit!: string;
  @Input() trend!: number;
  @Input() iconClass?: string;
  @Input() iconBgColor?: string;
  @Input() imgSrc?: string;

  protected Math = Math;
}
