import { Routes } from '@angular/router';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';
import { DashboardHomeComponent } from './pages/dashboard-home/dashboard-home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TablesComponent } from './pages/tables/tables.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardHomeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'tables', component: TablesComponent },
      { path: 'notifications', component: NotificationsComponent }
    ]
  },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: '**', redirectTo: 'dashboard' }
];
