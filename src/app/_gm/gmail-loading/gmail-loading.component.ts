import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
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
  Elastic,
  Bounce,
} from "gsap/all";
import { ViewEncapsulation } from '@angular/core';
import { Globals } from '../../globals';
import { DOODLETYPES } from '../../doodles/doodletypes';
import { DoodleService } from '../../doodles/doodle.service';

@Component({
  selector: 'app-gmail-loading',
  templateUrl: './gmail-loading.component.html',
  styleUrls: ['./gmail-loading.component.scss'],
  // encapsulation: ViewEncapsulation.None, // fixes dynamic content/styles issue
})

export class GmailLoadingComponent implements OnInit {

  public myTimeOut;
  public doodleStage;
  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public globals: Globals,
    public doodleService: DoodleService,
  ) {
    this.doodleService.getADI(this.route);
    console.log('XXXX',Number(this.globals.activeDoodleID));
  }

  @HostListener('click')
  click() {

    console.log('click');

    // this.router.navigate([ "/ginbox/" ]);
    this.router.navigate(['/ginbox/'], { queryParams: { doodleID: this.globals.activeDoodleID } });


  }

  ngOnInit() {
    console.log('XXXX',Number(this.globals.activeDoodleID));

    this.myTimeOut = setTimeout(function(){
      this.router.navigate(['/ginbox/'], { queryParams: { doodleID: this.globals.activeDoodleID } });
    }.bind(this), 4500);

    let loadingAnimation = document.getElementById('loading');
    this.doodleStage = document.createElement('div');
    this.doodleStage.setAttribute("id",'doodleStage');
    this.doodleStage.classList.add('doodleStage');
    loadingAnimation.appendChild(this.doodleStage);

    this.doAnimationDoodle();

  }

  public doAnimationDoodle(): void {

    switch(Number(this.globals.activeDoodleID)) {
      case 0:
        console.log('no doodle animation')
        break;
      case 1:
        this.sumerAnimation();
        break;
      case 2:
        this.meteorAnimation();
        break;
      default:
        console.log('DEFAULT SWITCH')
    }

  }

  public sumerAnimation(): void {

    var i;
    for (i = 0; i <= 6; i++) {
      let ele;
        ele = document.createElement('img');
        ele.setAttribute("id",'ss-gmail-ani-'+(i+1)+'');
        ele.classList.add('ss-gmail-ani-'+(i+1)+'');
        ele.src = './assets/doodle-styles/summer_solstice--gmail-ani--'+(i+1)+'.png';
        this.doodleStage.appendChild(ele);
    }

    let ssGmailAni1 = document.getElementById('ss-gmail-ani-1');
    let ssGmailAni2 = document.getElementById('ss-gmail-ani-2');
    let ssGmailAni3 = document.getElementById('ss-gmail-ani-3');
    let ssGmailAni4 = document.getElementById('ss-gmail-ani-4');
    let ssGmailAni5 = document.getElementById('ss-gmail-ani-5');
    let ssGmailAni6 = document.getElementById('ss-gmail-ani-6');
    let ssGmailAni7 = document.getElementById('ss-gmail-ani-7');

    let tla = new TimelineMax({
      // onComplete: console.log('the sun'),
    });

    tla.timeScale(1);

    tla.set(ssGmailAni1, {
      position: 'absolute',
      top: 60,
      left: -30,
    });
    tla.set(ssGmailAni2, {
      position: 'absolute',
      top: -110,
      left: -101,
      zIndex: 9
    });
    tla.set(ssGmailAni3, {
      position: 'absolute',
      top: -82,
      left: 40,
    });
    tla.set(ssGmailAni4, {
      position: 'absolute',
      top: -280,
      left: -130,
    });
    tla.set(ssGmailAni5, {
      position: 'absolute',
      left: 35,
      top: -500,
      x: '50%',
      y: '50%',
    });
    tla.set(ssGmailAni6, {
      position: 'absolute',
      top: -210,
      right: -120,
    });
    tla.set(ssGmailAni7, {
      position: 'absolute',
      top: 60,
      right: -30,
    });




    tla.from([ssGmailAni1,ssGmailAni7], 0.8, {
      scaleY: 0,
      rotateZ: '180deg',
      transformOrigin: 'center bottom',
      ease: Elastic.easeOut.config(1, 0.3),
    }, 1.4);
    tla.from(ssGmailAni2, 1, {
      scaleY: 0,
      rotateZ: '180deg',
      transformOrigin: 'center bottom',
      ease: Elastic.easeOut.config(1, 0.3),
    },'-=0.6');
    tla.from(ssGmailAni3, 1, {
      x: -80,
      scaleY: 0,
      rotateZ: '180deg',
      transformOrigin: 'center bottom',
      ease: Elastic.easeOut.config(1, 0.3),
    },'-=1.0');





    tla.from([ssGmailAni4], 1, {
      y: -40,
      scale: 0,
      transformOrigin: 'center bottom',
      ease: Elastic.easeOut.config(1, 0.3),
    },'-=1.2');
    tla.fromTo([ssGmailAni4], 0.9,
    {
      rotation: 3,
    },
    {
      rotation: -2,
      repeat: -1,
      yoyo: true,
      transformOrigin: 'center bottom',
      ease: Power1.easeOut,
    }
    ,'-=1');




    tla.from([ssGmailAni6], 1, {
      x: -40,
      y: -40,
      scaleY: 0,
      transformOrigin: 'center bottom',
      ease: Elastic.easeOut.config(1, 0.3),
    },'-=1');

    tla.fromTo([ssGmailAni6], 1,
    {
      rotation: -2,
    },
    {
      rotation: 2,
      repeat: -1,
      yoyo: true,
      transformOrigin: 'left bottom',
      ease: Power1.easeOut,
    }
    ,'-=1');



    // the sun
    tla.from(ssGmailAni5, 1, {
      opacity: 0,
      y: 40,
      scale: 0.8,
      ease: Elastic.easeOut.config(1, 0.3),
    },'-=1.0');
    tla.to(ssGmailAni5, 12, {
      rotation: 360,
      repeat: -1,
    },'-=1.0');

  }

  public meteorAnimation(): void {

    this.doodleStage.setAttribute("style",'width: 720px;');

    var i;
    for (i = 0; i <= 4; i++) {
      let ele;
        ele = document.createElement('img');
        ele.setAttribute("id",'meteor-gmail-ani-'+(i+1)+'');
        ele.classList.add('meteor-gmail-ani-'+(i+1)+'');
        ele.src = './assets/doodle-styles/meteor--gmail-ani--'+(i+1)+'.png';
        this.doodleStage.appendChild(ele);
    }

    let meteorGmailAni1 = document.getElementById('meteor-gmail-ani-1');
    let meteorGmailAni2 = document.getElementById('meteor-gmail-ani-2');
    let meteorGmailAni3 = document.getElementById('meteor-gmail-ani-3');
    let meteorGmailAni4 = document.getElementById('meteor-gmail-ani-4');
    let meteorGmailAni5 = document.getElementById('meteor-gmail-ani-5');

    let tla = new TimelineMax({
      // onComplete: console.log('the sun'),
    });

    tla.timeScale(1);

    tla.set(meteorGmailAni1, {
      position: 'absolute',
      x: 0,
      y: '-57%',
    });
    tla.set(meteorGmailAni2, {
      position: 'absolute',
      x: 0,
      y: '-57%',
    });
    tla.set(meteorGmailAni3, {
      position: 'absolute',
      x: 0,
      y: '-57%',
    });
    tla.set(meteorGmailAni4, {
      left: '0px',
      top: '-440px',
      position: 'absolute',
      width: '220px',
    });
    tla.set(meteorGmailAni5, {
      width: '220px',
      position: 'absolute',
      bottom: '-310px',
      right: '-20px',
    });





    tla.from([meteorGmailAni1,meteorGmailAni2,meteorGmailAni3], 1.4, {
      scale: 0,
      transformOrigin: 'center center',
      ease: Elastic.easeOut.config(1, 0.75),
    }, 1.2);

    tla.to([meteorGmailAni1], 4, {
      rotation: -4,
      transformOrigin: 'center center',
      ease: Power1.easeOut,
    }, '-=1.0');



    tla.from([meteorGmailAni2], 0.3, {
      opacity: 0,
      scale: 0,
      ease: Power1.easeOut,
    }, '-=4');
    tla.from([meteorGmailAni3], 0.3, {
      opacity: 0,
      scale: 0,
      ease: Power1.easeOut,
    }, '-=4');
    tla.to([meteorGmailAni2], 4, {
      rotation: 8,
      transformOrigin: 'center center',
      ease: Power1.easeOut,
    }, '-=4');
    tla.to([meteorGmailAni3], 4, {
      rotation: 32,
      transformOrigin: 'center center',
      ease: Power1.easeOut,
    }, '-=4');


    tla.from([meteorGmailAni4], 1, {
      scale: 0,
      opacity: 0,
      x: 100,
      y: 100,
      // transformOrigin: 'center center',
      ease: Elastic.easeOut.config(1, 0.75),
    }, '-=4.25');

    tla.from([meteorGmailAni5], 1, {
      scale: 0,
      opacity: 0,
      x: -100,
      y: -100,
      // transformOrigin: 'center center',
      ease: Elastic.easeOut.config(1, 0.75),
    }, '-=4.25');


    tla.to([meteorGmailAni4], 5, {
      rotation: 20,
      transformOrigin: '360px 360px',
      ease: Power1.easeInOut,
    }, '-=4.2');

    tla.to([meteorGmailAni5], 5, {
      rotation: 20,
      transformOrigin: '-160px -160px',
      ease: Power1.easeInOut,
    }, '-=4.2');



  }

  ngOnDestroy() {
    clearTimeout(this.myTimeOut);
  }

}
