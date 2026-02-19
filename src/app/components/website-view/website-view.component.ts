import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';
import { ImpuestosService } from '../../services/impuestos.service';

export interface WebsiteViewData {
  name: string;
  total: string;
  registros: string;
  porcentaje: string;
}

@Component({
  selector: 'app-website-view',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './website-view.component.html',
  styleUrl: './website-view.component.css'
})
export class WebsiteViewComponent implements OnInit {
  private readonly impuestosService = inject(ImpuestosService);

  websiteData: WebsiteViewData[] = [];

  private readonly categories = [
    { key: 'alimentacion', label: 'Alimentacion' },
    { key: 'vivienda', label: 'Vivienda' },
    { key: 'educacion', label: 'Educacion' },
    { key: 'vestimenta', label: 'Vestimenta' },
    { key: 'salud', label: 'Salud' }
  ] as const;

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: '#10b981',
        borderRadius: 5,
        barThickness: 8
      }
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: '#9ca3af' }
      },
      y: {
        display: true,
        grid: { display: true, color: '#f3f4f6' },
        ticks: { stepSize: 100, color: '#9ca3af' }
      }
    }
  };

  ngOnInit(): void {
    this.impuestosService.getImpuestos().subscribe((impuestos) => {
      const totals = this.categories.map((category) => {
        return impuestos.reduce((sum, item) => {
          const value = item.deducciones?.[category.key] ?? 0;
          return sum + value;
        }, 0);
      });

      const totalSum = totals.reduce((sum, value) => sum + value, 0);

      this.barChartData = {
        labels: this.categories.map((category) => category.label),
        datasets: [
          {
            ...this.barChartData.datasets[0],
            data: totals
          }
        ]
      };

      this.websiteData = this.categories.map((category, index) => {
        const total = totals[index] ?? 0;
        const registros = impuestos.filter((item) => (item.deducciones?.[category.key] ?? 0) > 0).length;
        const porcentaje = totalSum > 0 ? (total / totalSum) * 100 : 0;

        return {
          name: category.label,
          total: this.formatCurrency(total),
          registros: String(registros),
          porcentaje: `${porcentaje.toFixed(0)}%`
        };
      });
    });
  }

  private formatCurrency(value: number): string {
    return `$${value.toFixed(2)}`;
  }
}
