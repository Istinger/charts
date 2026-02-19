import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImpuestosService } from '../../services/impuestos.service';

export interface OrderItem {
  icon: string;
  iconColor: string;
  title: string;
  date: string;
}

@Component({
  selector: 'app-orders-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders-overview.component.html',
  styleUrl: './orders-overview.component.css'
})
export class OrdersOverviewComponent implements OnInit {
  private readonly impuestosService = inject(ImpuestosService);

  summaryText = '0 registros';
  orders: OrderItem[] = [];

  private readonly moneyIcon =
    'M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75zM2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z';

  ngOnInit(): void {
    this.impuestosService.getImpuestos().subscribe((impuestos) => {
      const labels = this.impuestosService.getMonthLabels(impuestos.length);
      this.summaryText = `${impuestos.length} registros`;

      this.orders = impuestos.map((item, index) => {
        const impuestoRenta = item.impuestoRenta ?? 0;
        const monthLabel = labels[index] ?? `Mes ${index + 1}`;

        return {
          icon: this.moneyIcon,
          iconColor: impuestoRenta > 0 ? 'text-green-500' : 'text-blue-gray-400',
          title: `Impuesto renta $${impuestoRenta.toFixed(2)}`,
          date: `${monthLabel} - ${item.cedula}`
        };
      });
    });
  }
}
