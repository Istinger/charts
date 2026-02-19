import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  links = [
    { text: 'Creative Tim', url: 'https://www.creative-tim.com' },
    { text: 'About Us', url: 'https://www.creative-tim.com/presentation' },
    { text: 'Blog', url: 'https://www.creative-tim.com/blog' },
    { text: 'License', url: 'https://www.creative-tim.com/license' }
  ];
}
