import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [],
  template: `
    <div class="mt-12">
      <div class="bg-white rounded-xl shadow-md p-6">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Notifications</h2>
        <p class="text-gray-600">Notifications page content goes here...</p>
      </div>
    </div>
  `,
  styles: []
})
export class NotificationsComponent {}
