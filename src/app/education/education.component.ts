import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent {
  educationList: Education[] = [
    {
      institute: "Jawaharlal Nehru University",
      course: 'Master of Computer Application',
      duration: '2011-2014',
      score: '7.19/9',
    },
    {
      institute: 'Dr. B R Ambedkar University',
      course: 'Bachelor of Computer Application',
      duration: '1993-1995',
      score: '75%',
    }
  ];

  constructor() {}

}
