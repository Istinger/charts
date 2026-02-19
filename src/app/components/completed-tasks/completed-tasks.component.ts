import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';
import { ImpuestosService } from '../../services/impuestos.service';

@Component({
  selector: 'app-completed-tasks',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './completed-tasks.component.html',
  styleUrl: './completed-tasks.component.css'
})
export class CompletedTasksComponent implements OnInit {
  private readonly impuestosService = inject(ImpuestosService);

  completionRate = '0%';
  comparedToPeriod = 'vs mes anterior';

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        borderColor: '#10b981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        fill: true,
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: '#10b981'
      }
    ]
  };

  public lineChartOptions: ChartConfiguration<'line'>['options'] = {
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
      const salarios = impuestos.map((item) => item.sueldoAnual ?? 0);
      const labels = this.impuestosService.getMonthLabels(salarios.length);

      this.lineChartData = {
        labels,
        datasets: [
          {
            ...this.lineChartData.datasets[0],
            data: salarios
          }
        ]
      };

      this.completionRate = this.calculateChange(salarios);
    });
  }

  private calculateChange(values: number[]): string {
    if (values.length < 2) {
      return '0%';
    }

    const last = values[values.length - 1];
    const prev = values[values.length - 2];
    if (prev === 0) {
      return '0%';
    }

    const diff = ((last - prev) / Math.abs(prev)) * 100;
    const sign = diff >= 0 ? '+' : '';
    return `${sign}${diff.toFixed(0)}%`;
  }
}
