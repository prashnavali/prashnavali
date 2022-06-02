import { Component, OnInit } from '@angular/core';
import { Paper } from 'src/app/model/paper';

@Component({
  selector: 'pv-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  papers : Paper[] = [{
    id: 1,
    upvote: 0,
    url: 'nothing.com',
    name: 'Software Reliablily',
    description: 'Exam of software reliablilty',
    upload_date: new Date
  }, {
    id: 2,
    upvote: 0,
    url: 'nothing.com',
    name: 'Software Reliablily',
    description: 'Exam of software reliablilty',
    upload_date: new Date
  }]

  ngOnInit(): void {
  }

}
