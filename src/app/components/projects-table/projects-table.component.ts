import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Project {
  name: string;
  budget: string;
  completion: number;
  completionColor: string;
}

@Component({
  selector: 'app-projects-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-table.component.html',
  styleUrl: './projects-table.component.css'
})
export class ProjectsTableComponent {
  projects: Project[] = [
    {
      name: 'Material XD Version',
      budget: '$14,000',
      completion: 60,
      completionColor: 'from-blue-600 to-blue-400'
    },
    {
      name: 'Add Progress Track',
      budget: '$3,000',
      completion: 10,
      completionColor: 'from-blue-600 to-blue-400'
    },
    {
      name: 'Fix Platform Errors',
      budget: 'Not set',
      completion: 100,
      completionColor: 'from-green-600 to-green-400'
    },
    {
      name: 'Launch our Mobile App',
      budget: '$20,500',
      completion: 100,
      completionColor: 'from-green-600 to-green-400'
    },
    {
      name: 'Add the New Pricing Page',
      budget: '$500',
      completion: 25,
      completionColor: 'from-blue-600 to-blue-400'
    }
  ];

  get completedProjectsCount(): number {
    return this.projects.filter(p => p.completion === 100).length * 10;
  }
}
