import { Component, OnInit } from '@angular/core';
import {
  Draggable,
  TweenMax,
  TweenLite,
  TimelineMax,
  TimelineLite,
  Linear,
  Power1,
  Power2,
  Power3,
  Power4,
  Elastic
} from "gsap/all";

@Component({
  selector: 'app-calendar-list-top',
  templateUrl: './calendar-list-top.component.html',
  styleUrls: ['./calendar-list-top.component.scss']
})
export class CalendarListTopComponent implements OnInit {

  private today: string;
  private date: number;
  private doodleCardIsOpen: boolean = false;

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

  //background-image: url(../../assets/09-21-MrRogers-bg.png);
  // position: fixed;
  // left: 0;
  // top: 0;
  // bottom: 0;
  // right: 0;
  // margin: 0;
  // border-radius: 0;
  // background-size: contain;
  // background-repeat: no-repeat;
  // background-color: #111;



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

  private openDoodleCard(event) {

    var target = event.target || event.srcElement || event.currentTarget;

    if(!this.doodleCardIsOpen){
      this.doodleCardIsOpen = true;

      target.classList.add('active');

      console.log('target',target);

      let ani = new TimelineMax();

      ani.set(target, {
        backgroundSize: 'contain',
        backgroundColor: '#111',
      });

      ani.to(target, 0.4,{
        position: 'fixed',
        // left: 0,
        // top: 0,
        width: '100vw',
        height: '100vh',
        autoRound: false,
        transformOrigin: "50% 50%",
        padding: 0,
        margin: 0,
        borderRadius: 0,
        ease: Power1.easeInOut,
      });

    }
    else {

      var iframe = document.createElement('iframe');
      var html = '<body></body>';
      iframe.src = 'https://www.youtube.com/embed/Rd7X0NsOeRk' + encodeURI(html);
      iframe.width = "560";
      iframe.height = "315";
      // iframe.style = "position: fixed;z-index: 99;width: 100%;height: 100%;border: none;";
      console.log('iframe.contentWindow =', iframe.contentWindow);

      // let iframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/Rd7X0NsOeRk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

      // document.body.prepend(iframe);
    }

  }

}


// <iframe width="560" height="315" src="https://www.youtube.com/embed/Rd7X0NsOeRk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
