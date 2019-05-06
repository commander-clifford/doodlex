import { Component, OnInit } from '@angular/core';
import { Globals } from '../../globals';
import { DOODLETYPES } from '../../doodles/doodletypes';
import { ViewEncapsulation } from '@angular/core';

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
  selector: 'app-srp-funbox',
  templateUrl: './srp-funbox.component.html',
  styleUrls: ['./srp-funbox.component.scss'],
  encapsulation: ViewEncapsulation.None, // fixes dynamic content/styles issue

})
export class SrpFunboxComponent implements OnInit {

  private selectedResult;
  private doneOnce: boolean = false;
  private doodletypes = DOODLETYPES;


  constructor(
    private globals: Globals,
  ){}

  ngOnInit() {

    this.selectedResult = this.globals.selectedSearchResults;

    this.startTheFunBox();

  }

  private startTheFunBox(): void {

    if(this.selectedResult.funbox.class === "easter"){
      this.setEasterStage();
    }

  }

  private openFunBox(): void {

    if(this.doneOnce){return}

    this.doneOnce = true;

    console.log("openFunBox");

    if(this.selectedResult.funbox.class === "easter"){
      this.runEasterStage();
    }

  }

  private setEasterStage(): void {

    const FUNBOX = document.getElementById("funbox"); console.log('FUNBOX',FUNBOX);
    const SRPEASTEREGG = document.getElementById("srp-easter-egg"); console.log('SRPEASTEREGG',SRPEASTEREGG);

    FUNBOX.onclick=function(){this.openFunBox()}.bind(this);

    let bunny;
    bunny = document.createElement('img');
    bunny.setAttribute("id","character");
    bunny.classList.add("funbox__img");
    bunny.src=this.selectedResult.funbox.imgUrl;
    bunny.onclick=function(){this.openFunBox()}.bind(this);
    bunny.setAttribute("style","cursor: pointer; outline: none; width: 120px;");
    SRPEASTEREGG.appendChild(bunny);

    let funBoxInsert2;
    funBoxInsert2 = document.createElement('div');
    funBoxInsert2.setAttribute("id","insert-2");
    funBoxInsert2.classList.add("insert");
    funBoxInsert2.setAttribute("style","overflow:hidden; position: absolute; z-index: 1; margin: 0; width:100%; height: 100%; bottom: 0; left: 0; color: white; border-radius: 0.5em;");
    FUNBOX.appendChild(funBoxInsert2);

    let funBoxInsert;
    funBoxInsert = document.createElement('div');
    funBoxInsert.setAttribute("id","insert");
    funBoxInsert.classList.add("insert");
    funBoxInsert.setAttribute("style","background-image: radial-gradient(#FFFFFF 10%, #7fe1fc 40%, #0090f1, #0083f2 100%); background-repeat: none; background-size: 600% 225%; background-position: top center;overflow:hidden; position: absolute;z-index: 0;margin: 0;width:100%;height: 100%;bottom: 0;left: 0;opacity: 0; color: white; border-radius: 0.5em;");
    FUNBOX.appendChild(funBoxInsert);

    let funBoxGrassFg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    funBoxGrassFg.setAttribute("id","funBox_fg");
    funBoxGrassFg.classList.add("insert_fg");
    funBoxGrassFg.setAttribute("style","opacity: 1; position: absolute;z-index: 2;width: calc(100% + 2em);height: 100%;bottom: 0;left: 0;");
    funBoxGrassFg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    funBoxInsert2.appendChild(funBoxGrassFg);

    let funBoxGrassBg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    funBoxGrassBg.setAttribute("id","funBox_bg");
    funBoxGrassBg.classList.add("insert_bg");
    funBoxGrassBg.setAttribute("style","opacity: 1; position: absolute;z-index: 1;width: calc(100% + 2em);height: 100%;bottom: 0;left: 0;");
    funBoxGrassBg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    funBoxInsert2.appendChild(funBoxGrassBg);

    this.growGrass();
  }

  private runEasterStage(): void {

    this.globals.isEeh = true;

    const CHARACTER = document.getElementById("character");
    const FUNBOX = document.getElementById("funbox");
    const FUNBOXTITLE = document.getElementById("funbox__title");
    const FUNBOXINSERT = document.getElementById("insert");

    let message_1 = document.createElement("p");
    message_1.innerHTML = "Will you help me find the my eggs?";
    FUNBOXINSERT.appendChild(message_1);

    let message_2 = document.createElement('p');
    message_2.innerHTML = "Search for 'Easter Egg Hunt'";
    FUNBOXINSERT.appendChild(message_2);

    let message_3 = document.createElement('p');
    message_3.innerHTML = "and follow me... let's go!";
    FUNBOXINSERT.appendChild(message_3);

    let easterLandAni = new TimelineLite();

    easterLandAni.set(message_1, {
      fontFamily: "'Life Savers', cursive",
      textShadow: '-1px 1px 0 hsl(313,73%,70%),-2px 2px 0 hsl(313,73%,65%),-3px 3px 0 hsl(313,73%,55%),0 0 5px rgba(0,0,0,.05),0 0 8px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.2),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.2)',
      position: 'absolute',
      zIndex: 1,
      bottom: '60px',
      right: '120px',
      opacity: 1,
      fontSize: '2em',
      textAlign: 'right',
      margin: 0,
      padding: 0,
      lineHeight: 1.4,
      autoAlpha: 0
    });
    easterLandAni.set(message_2, {
      fontFamily: "'Life Savers', cursive",
      textShadow: '-1px 1px 0 hsl(313,73%,70%),-2px 2px 0 hsl(313,73%,65%),-3px 3px 0 hsl(313,73%,55%),0 0 5px rgba(0,0,0,.05),0 0 8px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.2),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.2)',
      position: 'absolute',
      zIndex: 1,
      bottom: '60px',
      right: '120px',
      opacity: 1,
      fontSize: '2em',
      textAlign: 'right',
      margin: 0,
      padding: 0,
      lineHeight: 1.4,
      autoAlpha: 0
    });
    easterLandAni.set(message_3, {
      fontFamily: "'Life Savers', cursive",
      textShadow: '-1px 1px 0 hsl(313,73%,70%),-2px 2px 0 hsl(313,73%,65%),-3px 3px 0 hsl(313,73%,55%),0 0 5px rgba(0,0,0,.05),0 0 8px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.2),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.2)',
      position: 'absolute',
      zIndex: 1,
      bottom: '60px',
      right: '120px',
      opacity: 1,
      fontSize: '2em',
      textAlign: 'right',
      margin: 0,
      padding: 0,
      lineHeight: 1.4,
      autoAlpha: 0
    });

    easterLandAni.to(FUNBOXINSERT, 1, {
      opacity: 1,

      ease: Power2.easeInOut,});
    // easterLandAni.to(CHARACTER, 1, { y: 360-133, ease: Power2.easeInOut, },"-=1.0");
    easterLandAni.to(FUNBOX, 1, { height: 360, ease: Power2.easeInOut, },"-=1.0");
    easterLandAni.to(FUNBOXTITLE, 1, { color: 'white', textShadow: '-1px 1px 0px rgba(0,0,0,0.5)', ease: Power2.easeInOut, },"-=1.0");
    easterLandAni.from(message_1, 1, { y: 40, scale: 0.9, autoAlpha: 0, ease: Elastic.easeOut.config(1, 0.5), }, "-=0.2");
    easterLandAni.to(message_1, 1, { y: -70, ease: Elastic.easeInOut.config(1, 0.5), }, "+=1.8");
    easterLandAni.from(message_2, 1, { y: 40, scale: 0.9, autoAlpha: 0, ease: Elastic.easeOut.config(1, 0.5), }, "-=0.6");
    easterLandAni.to(message_1, 1, { y: -140, ease: Elastic.easeInOut.config(1, 0.5), }, "+=1.8");
    easterLandAni.to(message_2, 1, { y: -70, ease: Elastic.easeInOut.config(1, 0.5), }, "-=1");
    easterLandAni.from(message_3, 1, { y: 40, scale: 0.9, autoAlpha: 0, ease: Elastic.easeOut.config(1, 0.5), }, "-=0.6");

  }

  private growGrass(): void {



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

    var funBox_fg = document.querySelector("#funBox_fg");
    var funBox_bg = document.querySelector("#funBox_bg");
    // var riseUp = document.querySelector("#easterEgg");

    var start = now();
    var blades = [];

    var offset = 0;
    var width = 632;
    var height = 140;
    var total = 180;

    var minHeight = 20;
    var maxHeight = 40;
    var maxAngle = 20;
    var startAngle = 40;

    TweenLite.set(funBox_bg, { width: width, height: height });
    TweenLite.set(funBox_fg, { width: width, height: height });
    TweenLite.ticker.addEventListener("tick", render);

    init();

    function init() {

      // blades.forEach(function (blade) {return blade.destroy();});

      blades = [];

      for (var i = 0; i < total; i++) {
        if(i % 2 == 0){
          var path = createSVG("path", funBox_fg);
        } else {
          var path = createSVG("path", funBox_bg);
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

}
