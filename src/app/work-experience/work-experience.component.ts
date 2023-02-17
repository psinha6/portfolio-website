import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: 'Senior Software Engineer',
      company: 'SAP Labs',
      duration: 'Mar 2022 - Oct 2022',
      description: [
        'Worked for the new app as a homepage for the new cloud page.',
        'Maintaining features and handling updates as per customer feedbacks.',
      ],
    },
    {
      role: 'Senior Software Engineer',
      company: 'ServiceAide Inc.',
      duration: 'Jan 2018 - Apr 2022',
      description: [
        'Created AI enabled chat widget for ITSM based bot.',
        'Worked together to create ITSM based Bot Builder.',
        'Created node module for embedding software in clients platform.',
        'Worked on Ionic to create ISM app available on playstore.'
      ],
    },
    {
      role: 'Software Engineer',
      company: 'Next Education',
      duration: 'Dec 2016 - July 2018',
      description: [
        'Created and led the team of 12 to create Teach Next <br/> which is the bread and butter of the company.',
        'Woked on multiple products using ionic corodva.',
      ],
    },
    {
      role: 'Software Engineer',
      company: 'Kony (Tremenos)',
      duration: 'July 2015 - Dec 2016',
      description: [
        'Worked Software Development in MADP(Mobile Application <br/> Development Platform).',
        'Worked on creating testing environment for the entire application.',
      ],
    },
    {
      role: 'Software Developer',
      company: 'Aricent',
      duration: 'Jul 2014 - Jul 2015',
      description: [
        'Worked on creating the 4g implementation of the IMS RCS Client',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
