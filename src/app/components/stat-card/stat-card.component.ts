import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface StatCard {
  title: string;
  value: string;
  icon: string;
  gradient: string;
  shadowColor: string;
  change: string;
  changeType: 'positive' | 'negative';
  period: string;
  svgPath: string;
}

@Component({
  selector: 'app-stat-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stat-card.component.html',
  styleUrl: './stat-card.component.css'
})
export class StatCardComponent {
  @Input() card!: StatCard;
}
