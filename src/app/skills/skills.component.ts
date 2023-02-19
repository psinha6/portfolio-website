import { Component } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  skills: Skill[] = [
    {
      name: 'Angular, Angular Material',
      level: 'Expert',
      rating: 90,
    },
    {
      name: 'Kendo UI for Angular',
      level: 'Expert',
      rating: 90,
    },
    {
      name: 'HTML, CSS, JS',
      level: 'Expert',
      rating: 90,
    },
    {
      name: 'RxJS',
      level: 'Expert',
      rating: 80,
    },
    {
      name: 'React Redux',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'Java',
      level: 'Intermidiate',
      rating: 50,
    }
  ];
  constructor() {}
}
