import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'SAP S/4HANA Cloud',
      technologies: 'SAPUI, HTML, CSS',
      description: [
        'Worked as a senior developer to develop apps that are powered by Cloud which now is the landing page of SAP Tool.',
        'Trained and mentored junior developers and engineers, teaching skills in SAPUI5 and working to improve overall team performance',
      ],
    },
    {
      title: 'Luma Virtual Agent',
      technologies: 'Angular, TypeScript, RxJS, HTML, SCSS, NgRX, Socket.io',
      description: [
        'Developed completely configurable and extinsible Chat widget',
        'Individual responsibility of the front end',
        'Created a node module and used createCustomElement to use the chat widget as a plug and play module'
      ],
    },
    {
      title: 'Teach Next',
      technologies: 'Angular, TypeScript, RxJS, HTML, SCSS, electronjs',
      description: [
        'Created a multi-touch board using electronjs which can host other applications and video content for classroom teachings',
        'Led the team for the complete development of the product',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
