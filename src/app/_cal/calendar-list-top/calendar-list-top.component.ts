import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-list-top',
  templateUrl: './calendar-list-top.component.html',
  styleUrls: ['./calendar-list-top.component.scss']
})
export class CalendarListTopComponent implements OnInit {

  private today: string;
  private date: number;

  private events = [
    {
      title: "Celebrate Mr. Rogers",
      img: "../../assets/09-21-MrRogers-bg.png",

      isDoodle: true,
    },
    {
      title: "Christopher WFH",
      isDoodle: false,
    },
    {
      title: "Caitlin WFH",
      isDoodle: false,
    }
  ];

  constructor() {
    this.getToday();
  }

  ngOnInit() {
  }

  private getToday() {
    let d = new Date();
    let weekday = new Array(7);
      weekday[0] = "Sun";
      weekday[1] = "Mon";
      weekday[2] = "Tue";
      weekday[3] = "Wed";
      weekday[4] = "Thu";
      weekday[5] = "Fri";
      weekday[6] = "Sat";

      this.today = weekday[d.getDay()];
      this.date = d.getDate();

}
}
