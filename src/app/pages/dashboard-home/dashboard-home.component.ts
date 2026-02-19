import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatCardComponent, StatCard } from '../../components/stat-card/stat-card.component';
import { ProjectsTableComponent } from '../../components/projects-table/projects-table.component';
import { WebsiteViewComponent } from '../../components/website-view/website-view.component';
import { DailySalesComponent } from '../../components/daily-sales/daily-sales.component';
import { CompletedTasksComponent } from '../../components/completed-tasks/completed-tasks.component';
import { OrdersOverviewComponent } from '../../components/orders-overview/orders-overview.component';

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  imports: [CommonModule, StatCardComponent, ProjectsTableComponent, WebsiteViewComponent, DailySalesComponent, CompletedTasksComponent, OrdersOverviewComponent],
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.css'
})
export class DashboardHomeComponent {
  statCards: StatCard[] = [
    {
      title: "Today's Money",
      value: '$53k',
      icon: 'money',
      gradient: 'bg-gradient-to-tr from-blue-600 to-blue-400',
      shadowColor: 'shadow-blue-500/40',
      change: '+55%',
      changeType: 'positive',
      period: 'last week',
      svgPath: 'M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z|M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z|M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z'
    },
    {
      title: "Today's Users",
      value: '2,300',
      icon: 'users',
      gradient: 'bg-gradient-to-tr from-pink-600 to-pink-400',
      shadowColor: 'shadow-pink-500/40',
      change: '+3%',
      changeType: 'positive',
      period: 'last month',
      svgPath: 'M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z'
    },
    {
      title: 'New Clients',
      value: '3,462',
      icon: 'clients',
      gradient: 'bg-gradient-to-tr from-green-600 to-green-400',
      shadowColor: 'shadow-green-500/40',
      change: '-2%',
      changeType: 'negative',
      period: 'yesterday',
      svgPath: 'M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z'
    },
    {
      title: 'Sales',
      value: '$103,430',
      icon: 'sales',
      gradient: 'bg-gradient-to-tr from-orange-600 to-orange-400',
      shadowColor: 'shadow-orange-500/40',
      change: '+5%',
      changeType: 'positive',
      period: 'yesterday',
      svgPath: 'M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z'
    }
  ];
}
