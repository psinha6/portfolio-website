import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Prateek Kumar Sinha'],
    ['DOB', '09.09.1989'],
    ['Work Exp', '8 Years'],
    ['Education', 'M.C.A Jawaharlal Nehru University, New Delhi, India'],
    ['Interests', 'Cricket'],
  ];

  aboutMe: string[] = [
    'Hi, I am a Software Engineer with 8 years of experience in software industry.',
    'Worked as product developer in many companies and built successful products which acts as bread and butter of the company',
    'Delivered all product withing deadlines. Always eager to learn new technologies.',
    'Currently, looking for a job in (Berlin) Europe',
  ];

  constructor() {}

  ngOnInit(): void {}
}
