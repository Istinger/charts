import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  template: `
    <div class="mt-12">
      <div class="bg-white rounded-xl shadow-md p-6">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Profile</h2>
        <p class="text-gray-600">Profile page content goes here...</p>
      </div>
    </div>
  `,
  styles: []
})
export class ProfileComponent {}
