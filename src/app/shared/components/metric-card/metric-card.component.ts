import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-metric-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './metric-card.component.html',
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
