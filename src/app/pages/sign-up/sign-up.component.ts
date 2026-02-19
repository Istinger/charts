import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="min-h-screen flex items-center justify-center bg-gray-50">
      <div class="bg-white rounded-xl shadow-md p-8 max-w-md w-full">
        <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">Sign Up</h2>
        <form class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <input type="text" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="John Doe">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input type="email" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="your@email.com">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input type="password" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="••••••••">
          </div>
          <button type="submit" class="w-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all">
            Sign Up
          </button>
        </form>
        <p class="mt-4 text-center text-sm text-gray-600">
          Already have an account? 
          <a [routerLink]="['/sign-in']" class="text-blue-500 hover:text-blue-600 font-medium">Sign In</a>
        </p>
      </div>
    </div>
  `,
  styles: []
})
export class SignUpComponent {}
