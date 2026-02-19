import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';

export interface ImpuestoDeducciones {
  alimentacion: number;
  vivienda: number;
  educacion: number;
  vestimenta: number;
  salud: number;
  total: number;
}

export interface Impuesto {
  cedula: string;
  sueldoAnual: number;
  deducciones: ImpuestoDeducciones;
  baseImponible: number;
  fraccionBasica: number;
  impuestoFraccionBasica: number;
  porcentajeExcedente: number;
  excedente: number;
  impuestoRenta: number;
}

@Injectable({ providedIn: 'root' })
export class ImpuestosService {
  private readonly apiUrl = 'http://localhost:3000/impuestos';
  private cache$?: Observable<Impuesto[]>;

  constructor(private http: HttpClient) {}

  getImpuestos(): Observable<Impuesto[]> {
    if (!this.cache$) {
      this.cache$ = this.http.get<Impuesto[]>(this.apiUrl).pipe(shareReplay(1));
    }

    return this.cache$;
  }

  getMonthLabels(count: number): string[] {
    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    if (count <= 0) {
      return [];
    }

    if (count <= months.length) {
      return months.slice(0, count);
    }

    return Array.from({ length: count }, (_, index) => months[index % months.length]);
  }
}
