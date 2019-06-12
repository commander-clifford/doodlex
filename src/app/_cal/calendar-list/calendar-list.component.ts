import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-list',
  templateUrl: './calendar-list.component.html',
  styleUrls: ['./calendar-list.component.scss']
})
export class CalendarListComponent implements OnInit {

  private events = [
    {
      time: '',
    },
    {
      time: '01:00',
    },
    {
      time: '02:00',
    },
    {
      time: '03:00',
    },
    {
      time: '04:00',
    },
    {
      time: '05:00',
    },
    {
      time: '06:00',
    },
    {
      time: '07:00',
    },
    {
      time: '08:00',
      title: 'Standup',
    },
    {
      time: '09:00',
    },
    {
      time: '10:00',
    },
    {
      time: '11:00',
      title: 'Team lunch',
      willAttend: true,
      duration: 1.5
    },
    {
      time: '12:00',
    },
    {
      time: '01:00',
    },
    {
      time: '02:00',
    },
    {
      time: '03:00',
    },
    {
      time: '04:00',
    },
    {
      time: '05:00',
    },
    {
      time: '06:00',
    },
    {
      time: '07:00',
    },
    {
      time: '08:00',
    },
    {
      time: '09:00',
    },
    {
      time: '10:00',
    },
    {
      time: '11:00',
    },
    {
      time: '12:00',
    },
  ];

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    document.getElementById('Team lunch').scrollIntoView(false);
  }

}
