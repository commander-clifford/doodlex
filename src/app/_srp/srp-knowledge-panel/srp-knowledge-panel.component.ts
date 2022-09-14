import { Component, OnInit } from '@angular/core';
import { Globals } from '../../globals';
import { AppStateService } from '../../app-state.service';
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
  selector: 'app-srp-knowledge-panel',
  templateUrl: './srp-knowledge-panel.component.html',
  styleUrls: ['./srp-knowledge-panel.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)',
    '(window:mousemove)': 'onMousemove($event)'
    // '(mousemove)': 'onMousemove($event)'
    // @HostListener('mousemove', ['$event'])
  }
})

export class SrpKnowledgePanelComponent implements OnInit {

  public audioClip = new Audio();
  public density: number = 400;
  public doneOnce: boolean = false;
  public option2: boolean = false;
  public isMobileResolution: boolean;
  public speed: number = 1;
  public eggsFound: number;
  public colors = ["#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF"];
  public colorsLength = this.colors.length;
  public winHeight: number = window.innerHeight;
  public winWidth: number = window.innerWidth;

  public start = {
    yMin: 0,
    yMax: 0,
    xMin: 0,
    xMax: this.winWidth,
    scaleMin:0.4,
    scaleMax:0.8,
    opacityMin:0.5,
    opacityMax:0.6,
  };
  public mid = {
    yMin: this.winHeight/2,
    yMax: this.winHeight/2,
    xMin: 100,
    xMax: this.winWidth-100,
    scaleMin:0.4,
    scaleMax:0.8,
    opacityMin:0.4,
    opacityMax:0.8,
  };
  public end = {
    yMin: this.winHeight,
    yMax: this.winHeight,
    xMin: 0,
    xMax: this.winWidth,
    scaleMin:0.4,
    scaleMax:0.6,
    opacityMin:0.8,
    opacityMax:1.0,
  };
  public selectedResult;

  constructor(
    public globals: Globals,
    public appStateService: AppStateService,
  ) {
    this.isMobileResolution = appStateService.getIsMobileResolution();
    this.globals.isMobileResolution = this.isMobileResolution;
  }

  ngOnInit() {

    this.selectedResult = this.globals.selectedSearchResults;

    // load egg audio -if
    if(this.selectedResult.egg && this.selectedResult.egg.audioUrl){
      this.audioClip.src = this.selectedResult.egg.audioUrl;
      this.audioClip.load();
    }

    // count the number off found egg if eeh is playing -if
    if(this.globals.eehStep){this.eggsFound = this.globals.eehStep;}

  }

  // ngAfterContentInit() {
  ngAfterViewInit() {

    // stage easter grass -if
    if (this.selectedResult.egg && this.selectedResult.egg.class == 'easter-trivia') {
      this.stageEasterScene();
    }


  }

  public stageEasterScene(): void {

    let srpKpHeader = document.getElementById("knowledge-panel__header"); console.log('srpKpHeader',srpKpHeader);

    let srpKpInsert;
    srpKpInsert = document.createElement('div');
    srpKpInsert.setAttribute("id","easter-land");
    srpKpInsert.classList.add("easter-land");
    srpKpInsert.setAttribute("style","overflow:hidden; background-image: radial-gradient(#FFFFFF 10%, #7fe1fc 40%, #0090f1, #0083f2 100%); background-size: 600% 200%; background-position: top center; position: absolute;z-index: 0;margin: 0 -1em;width: calc(100% + 2em);height: 100%;top: 0;left: 0;opacity: 0; color: white;");
    srpKpHeader.appendChild(srpKpInsert);

    let srpKpGrassFg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    srpKpGrassFg.setAttribute("id","stage_fg");
    srpKpGrassFg.classList.add("easter-land");
    srpKpGrassFg.setAttribute("style","opacity: 0; position: absolute;z-index: 1;width: calc(100% + 2em);height: 100%;top: 0;left: 0;");
    srpKpGrassFg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    srpKpInsert.appendChild(srpKpGrassFg);

    let srpKpGrassBg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    srpKpGrassBg.setAttribute("id","stage_bg");
    srpKpGrassBg.classList.add("easter-land");
    srpKpGrassBg.setAttribute("style","opacity: 0; position: absolute;z-index: 0;width: calc(100% + 2em);height: 100%;top: 0;left: 0;");
    srpKpGrassBg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    srpKpInsert.appendChild(srpKpGrassBg);

    this.growGrass();

  }

  public onMousemove(event: MouseEvent) {

    // TODO add this only after elements are created
    let srpBgMountains = document.getElementById("srp__bg--mountains") ? document.getElementById("srp__bg--mountains") : null;
    let srpBgSnow = document.getElementById("srp__bg--snow") ? document.getElementById("srp__bg--snow") : null;

    if( srpBgMountains && srpBgSnow ){
      // console.log(event.clientX,event.clientY);
      let skewY;
      if( event.pageX < this.winWidth/2 ){
        skewY = 1 - event.pageX / (this.winWidth/2);
      } else if( event.pageX > (this.winWidth/2) ) {
        skewY = (event.pageX / (this.winWidth/2) - ((event.pageX / (this.winWidth/2))*2))+1;
      } else {
        skewY = 0;
      }
      // srpBgMountains.style.top=((event.pageY/(8*8))+20)+"px";
      srpBgMountains.style.transform='skewY('+skewY+'deg)';
      srpBgSnow.style.top=((event.pageY/(8*16))+0)+"px";
      // srpBgSnow.style.transform='skewY('+((-skewY))+'deg)';
    }
  }

  public onResize(event) {
    this.winHeight = window.innerHeight;
    this.winWidth = window.innerWidth;
    this.start.xMax = this.winWidth;
    this.mid.yMin = this.winHeight/2;
    this.mid.yMax = this.winHeight/2;
    this.mid.xMax = this.winWidth-100,
    this.end.yMin = this.winHeight;
    this.end.yMax = this.winHeight;
    this.end.xMax = this.winWidth;
  }

  public findEasterEgg(): void {

    console.log('egg',this.doneOnce);

    if(this.doneOnce){alert('only once - refresh');return}
    this.doneOnce = true;

    const eehTheme = this.selectedResult.egg.class; console.log('eehTheme',eehTheme);


    if (eehTheme == 'easter-trivia') {
      console.log('easter-trivia');
      this.doEasterTriviaEeh();
    } else

    if (eehTheme == 'christmas') {
      console.log('christmas');

      if (confirm("Congrats! You found a Google Easter Egg!\n Press OK for Regular Experience \nor CANCEL for Fullscreen")) {
        this.doXmasEeKp();
      } else {
        this.doXmasEeFs();
      }

      // if(option == 2){
      //   this.doXmasEeFs();
      // } else
      // if(option == 1){
      //   this.doXmasEeKp();
      // }

    }

  }

  // interations

  public doEasterTriviaEeh():void {

    console.log('this.eggsFound',this.eggsFound);

    // if(this.doneOnce){return}

    // this.doneOnce = true;

    if(this.eggsFound>0){
      this.eggsFound++;
    } else {
      this.eggsFound = 1;
    }
    this.globals.eehStep = this.eggsFound;

    console.log('this.eggsFound',this.eggsFound);


    console.log('you found ' + this.eggsFound + ' eggs');

    let easterEgg = document.getElementById("easterEgg"); console.log('easterEgg',easterEgg);
    let srpKpHeader = document.getElementById("knowledge-panel__header"); console.log('srpKpHeader',srpKpHeader);
    let srpKpInsert = document.getElementById("easter-land"); console.log('srpKpInsert',srpKpInsert);
    let srpKpGrassFg = document.getElementById("stage_fg"); console.log('srpKpGrassFg',srpKpGrassFg);
    let srpKpGrassBg = document.getElementById("stage_bg"); console.log('srpKpGrassBg',srpKpGrassBg);

    // //////////

    let eehMessage1 = document.createElement('div');
    eehMessage1.classList.add("srp__eeh-message");
    // eehMessage1.setAttribute("style","");

    switch (this.eggsFound) {
      case 1:
        eehMessage1.innerHTML = "We found the first<br>Easter Egg!";
      break;
      case 2:
        eehMessage1.innerHTML = "We found the second<br>Easter Egg!";
      break;
      case 3:
        eehMessage1.innerHTML = "We found the third<br>Easter Egg!";
      break;
      case 4:
        eehMessage1.innerHTML = "We found the fourth<br>Easter Egg!";
      break;
      case 5:
        eehMessage1.innerHTML = "We found the fifth<br>Easter Egg!";
      break;
      case 6:
        eehMessage1.innerHTML = "We found the sixth<br>Easter Egg!";
    }

    srpKpHeader.appendChild(eehMessage1);

    let eehMessage2 = document.createElement('div');
    eehMessage2.classList.add("srp__eeh-message");
    // eehMessage2.setAttribute("style","");

    switch (this.eggsFound) {
      case 1:
        eehMessage2.innerHTML = "Next Easter Egg:<br>Who is the Easter Mascot?";
      break;
      case 2:
        eehMessage2.innerHTML = "Next Easter Egg:<br>What do we collect our Easter Eggs in?";
        eehMessage2.setAttribute("style","font-size:2.8em;");
      break;
      case 3:
        eehMessage2.innerHTML = "Next Easter Egg:<br>What is the name of the Charlie Brown Easter Special?";
        eehMessage2.setAttribute("style","font-size:2.8em;");
      break;
      case 4:
        eehMessage2.innerHTML = "Next Easter Egg:<br>In The United States of America,<br>How does<br>The White House celebrate Easter?";
        eehMessage2.setAttribute("style","font-size:2.4em;");
      break;
      case 5:
        eehMessage2.innerHTML = "Next Easter Egg:<br>This Easter candy, is probably the most popular easter candy with it's marshmellow center and yellow spinkles coating.";
        eehMessage2.setAttribute("style","font-size:2em;");
      break;
      case 6:
        eehMessage2.innerHTML = "Yay!";
        eehMessage2.setAttribute("style","font-size:4em;");
        this.globals.isEeh = false;
      break;
      case 7:
        eehMessage2.innerHTML = "Next Easter Egg:<br>Who is the Easter Mascot?";
      }

    srpKpHeader.appendChild(eehMessage2);

    if(this.eggsFound===1){
      let eehMessage3 = document.createElement('div');
      eehMessage3.classList.add("srp__eeh-message--fine");
      eehMessage3.innerHTML = "Search for the correct answer to uncover the next egg";
      srpKpHeader.appendChild(eehMessage3);
      TweenMax.from(eehMessage3, 2, {
        opacity: 0,
        delay: 8,
      });
    }



    // ////////////

    let i;
    if(this.selectedResult.egg.items){
      for (i = 0; i < this.selectedResult.egg.items.length; i++) {
        let item;
        item = document.createElement('img');
        item.setAttribute("id",this.selectedResult.egg.id+"-"+i);
        item.classList.add(this.selectedResult.egg.id+"_character");
        item.classList.add(this.selectedResult.egg.class+"_item");
        item.classList.add("character--"+i);
        item.classList.add("item--"+i);
        item.src = this.selectedResult.egg.items[i].url;
        if((this.eggsFound-1) >= i){item.style.zIndex=9;item.style.width='52px'}
        srpKpInsert.appendChild(item);
      }
    }

    srpKpHeader.getElementsByTagName('mat-icon')[0].setAttribute("style","transition: all 0.4s 0.0s ease-in-out;color: white; text-shadow: -1px 1px 2px rgba(0,0,0,0.6);");
    srpKpHeader.getElementsByTagName('h1')[0].setAttribute("style","transition: all 0.4s 0.0s ease-in-out;color: white; text-shadow: -1px 1px 2px rgba(0,0,0,0.6);");
    srpKpHeader.getElementsByTagName('p')[0].setAttribute("style","transition: all 0.4s 0.0s ease-in-out;color: white; text-shadow: -1px 1px 1px rgba(0,0,0,0.6);");

    TweenMax.to(easterEgg, 0.8, {
      width: '35%',
      right: '-10%',
      ease: Power1.easeInOut,
      delay: 0.0,
    });
    TweenMax.to(srpKpHeader, 0.8, {
      height: 420,
      ease: Power1.easeInOut,
      delay: 0.0,
    });
    TweenMax.to(srpKpInsert, 0.8, {
      opacity: 1,
      ease: Power1.easeInOut,
      delay: 0.0,
    });
    TweenMax.to(srpKpGrassFg, 0.8, {
      opacity: 1,
      ease: Power1.easeInOut,
      delay: 0.0,
    });
    TweenMax.to(srpKpGrassBg, 0.8, {
      opacity: 1,
      ease: Power1.easeInOut,
      delay: 0.0,
    });
    TweenMax.from(srpKpGrassFg, 0.8, {
      y: 100,
      ease: Power1.easeInOut,
      delay: 0,
    });
    TweenMax.from(srpKpGrassBg, 0.8, {
      y: 100,
      ease: Power1.easeInOut,
      delay: 0,
    });

    TweenMax.from(eehMessage1, 1.2, {
      y: 40,
      scale: 0.9,
      opacity: 0,
      ease: Elastic.easeOut.config(1, 0.5),
      delay: 1,
    });
    TweenMax.to(eehMessage1, 1.2, {
      y: -40,
      scale: 1.1,
      opacity: 0,
      ease: Elastic.easeIn.config(1, 0.5),
      delay: 3.7,
    });
    TweenMax.from(eehMessage2, 1.2, {
      y: 40,
      scale: 0.9,
      opacity: 0,
      ease: Elastic.easeOut.config(1, 0.5),
      delay: 4.9,
    });

    TweenMax.to(srpKpGrassFg, 0.8, {
      opacity: 1,
      ease: Power1.easeInOut,
      delay: 0.0,
    });
    TweenMax.to(srpKpGrassBg, 0.8, {
      opacity: 1,
      ease: Power1.easeInOut,
      delay: 0.0,
    });

    TweenMax.staggerFrom('.'+(this.selectedResult.egg.id+"_character"), 0.8, {
      y: -100,
      opacity: 0,
      ease: Power2.easeInOut,
      delay: 0.02,
    },-0.06);

  }

  public doXmasEeKp(): void {

    let i;
    let newParticle;
    let srpBgHeadline;
    let srpBgSnow;
    let srpBgMountains;
    let srp = document.getElementById("srp");
    let srpKpHeader = document.getElementById("knowledge-panel__header");
    let srpKpInsert = document.getElementById("srpKp__santaLand") ? document.getElementById("srpKp__santaLand") : null;
    let easterEgg = document.getElementById("easterEgg") ? document.getElementById("easterEgg") : null;

    this.audioClip.play();

    if(true){

      this.doneOnce = true;

      srpKpHeader.getElementsByTagName('mat-icon')[0].setAttribute("style","transition: all 0.4s 0.0s ease-in-out;color: white; text-shadow: -1px 1px 2px rgba(0,0,0,0.6);");
      srpKpHeader.getElementsByTagName('h1')[0].setAttribute("style","transition: all 0.4s 0.0s ease-in-out;color: white; text-shadow: -1px 1px 2px rgba(0,0,0,0.6);");
      srpKpHeader.getElementsByTagName('p')[0].setAttribute("style","transition: all 0.4s 0.0s ease-in-out;color: white; text-shadow: -1px 1px 1px rgba(0,0,0,0.6);");

      srpKpInsert = document.createElement('div');
      srpKpInsert.setAttribute("id","srpKp__santaLand");
      srpKpInsert.classList.add("srpKp__santaLand");
      srpKpInsert.setAttribute("style","background-image: linear-gradient( rgba(119,232,251,1), rgba(119,232,251,0.4) );position: absolute;z-index: 0;margin: 0 -1em;width: calc(100% + 2em);height: 100%;top: 0;left: 0;background-attachment: fixed;background-size: cover;background-repeat: no-repeat;background-position: center bottom;opacity: 0; overflow: hidden; color: white;");
      srpKpHeader.appendChild(srpKpInsert);

      // srpBgHeadline = document.createElement('div');
      // srpBgHeadline.setAttribute("id","srp__santa-tracker");
      // srpBgHeadline.classList.add("srp__santa-tracker");
      // srpBgHeadline.setAttribute("style","font-family: 'Lobster', cursive;color: white;height: 100%;display: flex;justify-content: center;align-items: center;font-size: 3em;text-shadow: -1px 1px 0 hsl(174,5%,80%),-2px 2px 0 hsl(174,5%,75%),-3px 3px 0 hsl(174,5%,70%),-4px 4px 0 hsl(174,5%,66%),0 0 5px rgba(0,0,0,.05),0 1px 3px rgba(0,0,0,.2),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.2);transform: translate(0, -0.5em);");
      // srpBgHeadline.innerHTML = "Santa Tracker";
      // srpKpInsert.appendChild(srpBgHeadline);

      srpBgMountains = document.createElement('div');
      srpBgMountains.setAttribute("id","srp__bg--mountains");
      srpBgMountains.classList.add("srp__bg--mountains");
      srpBgMountains.setAttribute("style","background-image: url('./assets/santa-tracker-mountains-bg.png');position: absolute;z-index: 0;width: calc(100% + 2em);margin: 0 -1em;height: 100%;top: 0;left: 0;background-size: contain;background-repeat: no-repeat;background-position: center bottom;opacity:0;");
      srpKpInsert.appendChild(srpBgMountains);

      srpBgSnow = document.createElement('div');
      srpBgSnow.setAttribute("id","srp__bg--snow");
      srpBgSnow.classList.add("srp__bg--snow");
      srpBgSnow.setAttribute("style","background-image: url('./assets/santa-tracker-snow-bg.png');position: absolute;z-index: 0;width: calc(100% + 2em);margin: 0 -1em;height: 100%;top: 20px;left: 0;background-size: contain;background-repeat: no-repeat;background-position: center bottom;opacity:0;");
      srpKpInsert.appendChild(srpBgSnow);

      if(this.selectedResult.egg.items){
        for (i = 0; i < this.selectedResult.egg.items.length; i++) {
          let item;
          item = document.createElement('img');
          item.setAttribute("id",this.selectedResult.egg.id+"-"+i);
          item.classList.add(this.selectedResult.egg.id+"_character");
          item.classList.add("character--"+i);
          item.src = this.selectedResult.egg.items[i].url;
          srpKpInsert.appendChild(item);
        }
      }






      TweenMax.to(srpKpInsert, 0.8, {
        opacity: 1,
        ease: Power1.easeInOut,
        delay: 0.0,
      });
      TweenMax.to(srpKpHeader, 0.8, {
        height: 360,
        ease: Power1.easeInOut,
        delay: 0.0,
      });
      TweenMax.to(easterEgg, 0.8, {
        width: '40%',
        right: '0%',
        ease: Power1.easeInOut,
        delay: 0.0,
      });

      TweenMax.to(srpBgMountains, 0.8, {
        opacity: 1,
        ease: Power4.easeInOut,
        delay: 0.2,
      });
      TweenMax.to(srpBgSnow, 0.8, {
        opacity: 1,
        ease: Power4.easeInOut,
        delay: 0.0,
      });

      TweenMax.from(srpBgMountains, 0.8, {
        y: 120,
        ease: Power4.easeInOut,
        delay: 0.2,
      });
      TweenMax.from(srpBgSnow, 0.8, {
        y: 120,
        ease: Power4.easeInOut,
        delay: 0.0,
      });
      TweenMax.staggerFrom('.'+(this.selectedResult.egg.id+"_character"), 0.8, {
        x: -500,
        opacity: 0,
        ease: Power4.easeInOut,
        delay: 0.6,
      },-0.4);

      for (i = 0; i < this.density; i++) {
        newParticle = document.createElement('span');
        newParticle.id = i;
        newParticle.setAttribute("class", "particle small");
        srpKpInsert.appendChild(newParticle);
        this.spawn(newParticle);
      }

    }
    // else {
    //
    //   for (i = 0; i < this.density; i++) {
    //     newParticle = document.createElement('span');
    //     newParticle.id = i;
    //     newParticle.setAttribute("class", "particle small");
    //     srpKpInsert.appendChild(newParticle);
    //     this.spawn(newParticle);
    //   }
    //
    // }
  }

  public doXmasEeFs(): void {

    let srp = document.getElementById("srp");
    let srpBg;
    let srpBgSnow;
    let srpBgMountains;

    if(true){
      this.doneOnce = true;

      srpBg = document.createElement('div');
      srpBg.setAttribute("id","srp__bg");
      srpBg.classList.add("srp__bg--santa");
      srpBg.setAttribute("style","background-image: linear-gradient( rgba(119,232,251,1), rgba(119,232,251,0.6) );position: fixed;z-index: -1;width: 100vw;height: 100vh;top: 0;left: 0;background-attachment: fixed;background-size: cover;background-repeat: no-repeat;background-position: center bottom;opacity: 0;transition: opacity 2s ease-in-out;");
      srp.appendChild(srpBg);


      srpBgMountains = document.createElement('div');
      srpBgMountains.setAttribute("id","srp__bg--mountains");
      srpBgMountains.classList.add("srp__bg--mountains");
      srpBgMountains.setAttribute("style","background-image: url('./assets/santa-tracker-mountains-bg.png');position: fixed;z-index: -1;width: 100vw;height: 100vh;top: 0;left: 0;background-size: cover;background-repeat: no-repeat;background-position: center bottom;");
      srpBg.appendChild(srpBgMountains);

      srpBgSnow = document.createElement('div');
      srpBgSnow.setAttribute("id","srp__bg--snow");
      srpBgSnow.classList.add("srp__bg--snow");
      srpBgSnow.setAttribute("style","background-image: url('./assets/santa-tracker-snow-bg.png');position: fixed;z-index: -1;width: 100vw;height: 100vh;top: 20px;left: 0;background-size: cover;background-repeat: no-repeat;background-position: center bottom;");
      srpBg.appendChild(srpBgSnow);


      TweenMax.to(srpBg, 0.4, {
        opacity: 1,
        ease: Power1.easeInOut,
      });
    }
    // else {
    //   srpBg = document.getElementById("srp__bg");
    // }

    let i;
    let newParticle;

    for (i = 0; i < this.density; i++) {
      newParticle = document.createElement('span');
      newParticle.id = i;
      newParticle.setAttribute("class", "particle");
      srpBg.appendChild(newParticle);
      this.spawn(newParticle);
    }

  }

  // animation functions

  public growGrass(): void {

    const _createClass:any = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      } return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();

    function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}

    let Grass = function () {

      function Grass(path, offset, width, height, minHeight, maxHeight, maxAngle, startAngle) {

        _classCallCheck(this, Grass);

        this.path = path;

        this.width = random(4, 8);
        this.height = random(minHeight, maxHeight);
        this.maxAngle = random(10, maxAngle);
        this.angle = Math.random() * randomSign() * startAngle * Math.PI / 180;

        var offsetX = 1.5;

        // Start position
        var sx = offset / 2 + random(width - offset, null);
        var sy = height;

        // Curvature
        var csx = sx - offsetX;
        var csy = sy - this.height / (Math.random() < 0.5 ? 1 : 2);

        // Parallel point
        var psx = csx;
        var psy = csy;

        var dx = sx + this.width;
        var dy = sy;

        this.coords = [sx, sy, csx, csy, psx, psy, dx, dy];

        this.growing = false;
        this.morphed = false;

        this.start = 0;
        this.elapsed = 0;

        this.height_ = this.height;
        // this.height = random(200, Math.min(500, this.height));
        this.height = 20;

        var ambient = 0.85;

        var color = [
        Math.floor(random(16, 48) * ambient),
        Math.floor(random(100, 255) * ambient),
        Math.floor(random(16, 48) * ambient)];


        var w = this.width / 2;
        var d = "M" + sx + "," + (sy + 2) + ",h" + w + ",h" + w + "z";

        TweenLite.set(path, { fill: "rgb(" + color + ")", attr: { d: d } });

      }

      _createClass(Grass,
        [
          { key: "rise", value: function rise() {
            this.morphed = true;
            this.growing = false;
            this.elapsed = now() - this.start;
            TweenLite.to(this, random(2.5, 3.5), { height: this.height_, ease: Power1.easeInOut });
          }},
          { key: "morph", value: function morph(morphSVG) {
            var _this = this;
            var time = random(1.5, 3.5);
            var delay = random(0.5, 4.5);
            this.growing = true;
            TweenLite.to(this.path, time, { morphSVG: morphSVG, delay: delay, onComplete: function onComplete() {return _this.rise();} });
          }},
          { key: "update", value: function update(time) {
            if (this.growing) return;
            time -= this.elapsed;
            var coords = this.coords;
            var tip = Math.sin(time * 0.0007);
            var th = this.angle + Math.PI / 2 + tip * Math.PI / 180 * (this.maxAngle * Math.cos(time * 0.0002));
            var px = coords[0] + this.width + this.height * Math.cos(th);
            var py = coords[1] - this.height * Math.sin(th);
            var d = "M" + coords[0] + "," + coords[1];
            d += "C" + coords[0] + "," + coords[1] + "," + coords[2] + "," + coords[3] + "," + px + "," + py;
            d += "C" + px + "," + py + "," + coords[4] + "," + coords[5] + "," + coords[6] + "," + coords[7] + "z";
            if (!this.morphed) {
              this.morph(d);
              this.start = now();
            } else {
              this.path.setAttribute("d", d);
            }
          }},
          { key: "destroy", value: function destroy() {
            TweenLite.killTweensOf(this);
            TweenLite.killTweensOf(this.path);
            this.path.parentElement.removeChild(this.path);
          }}
        ]
      );
      return Grass;

    }();

    var xmlns = "http://www.w3.org/2000/svg";

    var perf = window.performance;
    var now = perf ? perf.now.bind(perf) : Date.now;

    var stage_fg = document.querySelector("#stage_fg");
    var stage_bg = document.querySelector("#stage_bg");
    // var riseUp = document.querySelector("#easterEgg");

    var start = now();
    var blades = [];

    var offset = 0;
    var width = 454;
    var height = 420;
    var total = 180;

    var minHeight = 50;
    var maxHeight = 70;
    var maxAngle = 20;
    var startAngle = 40;

    TweenLite.set(stage_bg, { width: width, height: height });
    TweenLite.set(stage_fg, { width: width, height: height });
    TweenLite.ticker.addEventListener("tick", render);

    init();

    function init() {

      // blades.forEach(function (blade) {return blade.destroy();});

      blades = [];

      for (var i = 0; i < total; i++) {
        if(i % 3 == 0){
          var path = createSVG("path", stage_bg);
        } else {
          var path = createSVG("path", stage_fg);
        }

        blades[i] = new Grass(path, offset, width, height, minHeight, maxHeight, maxAngle, startAngle);

      };
    }

    function render() {

      var elapsed = now() - start;

      if (!blades.length) return;

      for (var i = 0; i < total; i++) {
        blades[i].update(elapsed);
        // blades[i].update(0);
      };
    }

    function createSVG(type, parent) {
      var node = document.createElementNS(xmlns, type);
      parent && parent.appendChild(node);
      return node;
    }

    function random(min, max) {
      if (max == null) {
        max = min;
        min = 0;
      }
      return min + Math.random() * (max - min);
    }

    function randomSign() {
      return Math.random() < 0.5 ? 1 : -1;
    }
  }

  public range(map, prop): void {
    let min = map[prop + "Min"], max = map[prop + "Max"];
    return min + (max - min) * Math.random();
  }

  public spawn(particle): void {

    // console.log('partID:',particle.id);
    // console.log('partID: even? ', particle.id%2 );

    let wholeDuration = (10 / this.speed) * (0.7 + Math.random() * 0.4);
    let delay = ( wholeDuration * Math.random()) * ( this.speed * 3 );
    let partialDuration = (wholeDuration + 1) * (0.2 + Math.random() * 0.2);
    let rcolor = this.colors[ Math.floor(Math.random() * this.colorsLength) ];

    //set the starting values

    TweenMax.set(particle, {
      backgroundColor: rcolor,
      color: rcolor,
      opacity: this.range(this.start,"opacity"),
      scale: this.range(this.start,"scale"),
      // width: this.particleSize,
      // height: this.particleSize,
      x: this.range(this.start,"x"),
      y: this.range(this.start,"y"),
      visibility: "hidden",
    });

    // the y tween should be continuous and smooth the whole duration

    TweenMax.to(particle, (wholeDuration * 1.5), {
      delay: delay,
      y: this.range(this.end,"y"),
      ease: Power1.easeInOut,
      onComplete: function(){particle.remove()},
    });

    //now tween the x independently so that it looks more randomized (rather than linking it with scale/opacity changes too)

    TweenMax.to(particle, partialDuration, {
      delay: delay,
      x: particle.id%2===0 ? '-=100' : '+=100', // this.range(this.mid,"x"),
      ease: Power2.easeOut,
    });

    TweenMax.to(particle,wholeDuration - partialDuration, {
      delay:partialDuration + delay,
      x: particle.id%2===0 ? '+=400' : '-=400',// this.range(this.end,"x"),
      ease:Power2.easeInOut
    });

    //now create some random scale and opacity changes

    partialDuration = wholeDuration * (0.5 + Math.random() * 0.3);
    TweenMax.to(particle, partialDuration, {
      delay:delay,
      scale:this.range(this.mid,"scale"),
      autoAlpha:this.range(this.mid,"opacity"),
      ease:Linear.easeNone
    });

    TweenMax.to(particle, wholeDuration - partialDuration, {
      delay:partialDuration + delay,
      scale:this.range(this.end,"scale"),
      autoAlpha:this.range(this.end,"opacity"),
      ease:Linear.easeNone,

    });

  }

  // utilities (TODO: could be a service?)

  public reset(): void {

    let i;
    var particles = document.getElementsByClassName('particle');
    TweenMax.killAll();
    for(i=0; particles.length > i; i++){
      TweenMax.killTweensOf(particles[i]);
      particles[i].remove();
    }

  }

  ngOnDestroy() {
    console.log("I'm Mr.Meseeks.. and destroy!",this);
    this.reset();
  }

}
