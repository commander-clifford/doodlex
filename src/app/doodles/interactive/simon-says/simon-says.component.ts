import { Component, OnInit } from '@angular/core';
import { TimelineMax, Power4 } from 'gsap';
import * as $ from 'jquery';
import { ViewEncapsulation } from '@angular/core';





@Component({
  selector: 'app-simon-says',
  templateUrl: './simon-says.component.html',
  styleUrls: ['./simon-says.component.scss'],
  encapsulation: ViewEncapsulation.None, // fixes dynamic content/styles issue
})
export class SimonSaysComponent implements OnInit {


    public timer = 0; //this is the timer var; used for the game timer
    public gameTimer = true;
    public gameIO = false; // this is the on / off indicator
    public flashDuration = 200; // this is how fast the game buttons flash on during play
    public series = []; // this is where the game series is stored
    public seriesDots = [];

    public curPlay = 0;
    public numButtons = 4; // this is the number of game buttons; 4 is default

    public bColors = ['red','green','yellow','blue'];
    public buttons = document.getElementsByClassName('gameButton'); // these are the game buttons
    public messageContainer; // these are the game buttons
    public seriesContainer; // these are the game buttons
    public wrapper; // these are the game buttons

    // public randomButtonNumber = ''; // this is the randomly chosen button on each turn
    public stopButton;
    public playButton;
    public gameContainer;



    constructor() { }

    ngOnInit() {

      this.wrapper = document.getElementById('wrapper'); // these are the game buttons
      this.messageContainer = document.getElementById('message'); // these are the game buttons
      this.seriesContainer = document.getElementById('series'); // these are the game buttons
      this.playButton = document.getElementById('playButton'); // these are the game buttons
      this.stopButton = document.getElementById('stopButton'); // these are the game buttons

      console.log('this.wrapper',this.wrapper);
      console.log('this.messageContainer',this.messageContainer);
      console.log('this.seriesContainer',this.seriesContainer);

      // is mobile or desktop?
      this.determineEnvironment();

      // Register/create interaction elements & add events
      this.gameContainer = document.getElementById('gameButtons');

      // this.stopButton = document.getElementById('stopButton');
      // this.stopButton.addEventListener('mouseup', (event) => { this.toggleGameIO('stop') });

      this.playButton = document.getElementById('playButton');
      // this.playButton.addEventListener('mouseup', (event) => { this.toggleGameIO('play') });

      let button0 = document.getElementById('button-0');
        button0.classList.add('gameButton', 'button-0');
        button0.addEventListener('mousedown', (event) => { this.buttonAction(event); });
        button0.addEventListener('mouseup', (event) => { this.buttonAction(event); });

      let button1 = document.getElementById('button-1');
        button1.classList.add('gameButton', 'button-1');
        button1.addEventListener('mousedown', (event) => { this.buttonAction(event); });
        button1.addEventListener('mouseup', (event) => { this.buttonAction(event); });

      let button2 = document.getElementById('button-2');
        button2.classList.add('gameButton', 'button-2');
        button2.addEventListener('mousedown', (event) => { this.buttonAction(event); });
        button2.addEventListener('mouseup', (event) => { this.buttonAction(event); });

      let button3 = document.getElementById('button-3');
        button3.classList.add('gameButton', 'button-3');
        button3.addEventListener('mousedown', (event) => { this.buttonAction(event); });
        button3.addEventListener('mouseup', (event) => { this.buttonAction(event); });


      // var i;
      // for (i = 0; i <= 3; i++) {
      //   let button = document.createElement('button');
      //     button.setAttribute('id','button-'+i);
      //     button.classList.add('gameButton', 'top-left', 'button-'+i, this.bColors[i]);
      //     button.setAttribute('buttonnum',i);
      //     button.addEventListener('mousedown', (event) => { this.buttonAction(event); });
      //     button.addEventListener('mouseup', (event) => { this.buttonAction(event); });
      //     this.gameContainer.appendChild(button);
      // }

      // SOUND REGISTER
      // createjs.Sound.registerSound("dir/file.mp3", "soundName", true);

    }

    public startGame():void {
      this.gameIO = true;
      // setTimeout(function(){this.timerCounter()}.bind(this), 1000);
      this.playButton.setAttribute('style','display: none;');
      // this.stopButton.setAttribute('style','display: block;');
      this.aiChooser();
    }

    public stopGame():void {
      this.gameIO = false;

      this.resetGame();

      this.playButton.setAttribute('style','display: block;');
      // this.stopButton.setAttribute('style','display: none;');

      // $('#series').html(this.series);
      // $('#length').html(this.series.length);
      // $('#step').html(this.curPlay);
    }

    public playGame(e):void {

      console.log('playGame',e);
      console.log('playGame',e.srcElement);
      console.log('playGame',e.currentTarget);
      console.log('playGame',e.srcElement.getAttribute('buttonnum'));
      console.log('playGame',this.series);
      console.log('playGame',this.curPlay);
      // alert( $(pButton).attr('buttonnum') );

      // Push the button styles
      // $(buttons).removeClass('active');
      // $(pButton).addClass('active');setTimeout(function(){$(pButton).removeClass('active')},flash);

      if(this.gameIO==true){

        // if the pressed button is the same as the new series number
        // if($(pButton).attr('buttonnum')==this.series[this.curPlay] ){
        if(e.srcElement.getAttribute('buttonnum') == this.series[this.curPlay] ){

          // update and display current turn variable
          this.curPlay++;
          // $('#step').html(this.curPlay);

          // if last turn
          if( this.curPlay == this.series.length ){
            // alert('good');

            this.messagePop('Great Job!');

            this.curPlay = 0;
            // reset and start timer
            this.resetTimer();

            // setTimeout(this.timerCounter, 1000);

            // start the next series
            setTimeout(function(){
              this.aiChooser();
            }.bind(this),2000);

          } else {
            // keep playing till last  turn
            // alert('keep going');
          }
        } else {
          // wrong button ( didn't match the series )
          // alert('WRONG IDIOT!!');
          this.messagePop('Oops! Game Over.');
          this.toggleGameIO('stop');
        }
      }
    }

    public toggleGameIO(button): void {

      console.log('button',button);

      // PLAY BUTTON - GAME ON
      if( button === 'play' ){
        this.startGame();
      } else
      // STOP BUTTON - GAME OFF
      if( button === 'stop' ){
        this.stopGame();
      }
    }

    public resetTimer(): void {
      this.timer=0;//reset clicks counter back to 0
      // $('#timer').html(this.timer+':00');//display the new timer position
      this.gameTimer = false;
    }

    public buttonAction(e) {

      e.stopPropagation();
      e.preventDefault();

      console.log('e',e.srcElement.id,event.type);

      if(e.type === 'mousedown'){

        [].forEach.call(this.buttons, function(el) { el.classList.remove("active"); });

        e.srcElement.classList.add('active');

      } else
      if(e.type === 'mouseup'){

        e.srcElement.classList.remove('active');

        this.playGame(e);

      }

    }

    public timerCounter(): void {
      if(true == this.gameIO && true == this.gameTimer){
        this.timer++;
        var seconds = this.timer %60;
        // if(seconds<10){seconds = '0'+seconds;}
        var totalMinutes = Math.floor(this.timer/60);
        var minutes = totalMinutes%60;
        var hours = Math.floor(totalMinutes/60);
        if(hours<1){//if hours is 0
          var cvtimer =minutes+':'+seconds;
        }else if(hours>=1){//if hours is 1 or more
          var cvtimer =hours+':'+minutes+':'+seconds;
        }
        // $('#timer').html(cvtimer);
        console.log(cvtimer);
        setTimeout(function(){this.timerCounter}.bind(this), 1000);
      }
    }

    // Message Popup
    public messagePop(message): void {

      let tl = new TimelineMax({
        // repeat: -1,
        // yoyo: true,
        // repeatDelay: 0,
      // onStart: myFunc, // Run myFunc() when timeline starts
      // onStartScope: Object, // What 'this' refers to inside of myFunc
      // onStartParams: ['{self}', 'param2'] // {self} is timeline itself
      });
      //
      // tl.set(
      //   this.messageContainer,
      //   {
      //     autoAlpha: 0,
      //   }
      // );
      //
      // tl.fromTo(
      //   this.messageContainer, 1,
      //   {
      //     autoAlpha: 1,
      //   },
      //   {
      //     autoAlpha: 0,
      //     ease: Power4.easeInOut,
      //   }
      // );

      // }




      // $('#message').slideDown().text(message);
      // setTimeout(function(){ $('#message').slideUp() },1500);
      // setTimeout(function(){ $('#message').text('') },2000);
    }

    // AI CHOOSER
    // if series exists - animate the series - then choose the next random button
    public aiChooser(): void {
      var timeDelay = 400;//speed of random generation for looping button animation
      for (var i = 0; i <= this.series.length; i++) {

        // on last loop - run the random chooser
        if(i===this.series.length){
          // run new choice
          setTimeout(function(){
            // choose the next random button
            let randomButtonNumber = Math.floor(Math.random() * this.numButtons);

            console.log('randomButtonNumber',randomButtonNumber);
            console.log('this.buttons',this.buttons);
            // alert('chooser button: '+randomButtonNumber);
            // flash the new random button
            this.buttons[randomButtonNumber].classList.add('active');
            setTimeout(function(){
              // this.buttons.classList.remove('active');
              [].forEach.call(this.buttons, function(el) {
                el.classList.remove("active");
              });
            }.bind(this),this.flashDuration);
            // save the new random button to the series variable
            this.series.push(randomButtonNumber);
            // save the cheat code dots
            this.seriesDots.push("<span class=\"series-dot color-"+randomButtonNumber+"\"></span>");

            console.log('series',this.series);
            console.log('seriesDots',this.seriesDots);
            // update the display elements
            // $('#step').html(this.curPlay); // the current side of the ratio
            // $('#length').html(this.series.length); // the goal side of thr ratio
            $('#series').html(this.seriesDots);// the cheat code at the bottom
            // re start timer
            this.gameTimer = true;
            // setTimeout(function(){this.timerCounter()}.bind(this), 1000);
            // end the loop - or get stuck in an infinite loop
            return;
          }.bind(this),timeDelay);

          return;

        }

        if(this.series.length > 0){

          let theButton = this.buttons[this.series[i]];

          // console.log('theButton',theButton);
          // console.log('theButton',theButton.getAttribute('style').substring(6,12));

          let color = theButton.getAttribute('style').substring(6,12);
    			//slow down the series animation so each flash happens 400 milliseconds apart
    			setTimeout(function(){
    				theButton.classList.add('active');
            // document.getElementById('wrapper').style.background = "#"+color;
            setTimeout(function(){
              theButton.classList.remove('active');
              // document.getElementById('wrapper').removeAttribute('style');
            },this.flashDuration);
    			}.bind(this),timeDelay);
    			timeDelay+=400;//speed increments - same as timeDelay original var

        }





















      };
    }

    public resetGame():void {
      this.series = [];
      this.seriesDots = [];
      this.curPlay = 0;
      this.resetTimer();
    }

    public determineEnvironment():void {
      const ua = navigator.userAgent;
      let isMobile = /Mobile/.test(ua);
      document.body.classList.add(isMobile ? 'mobile' : 'desktop');
    }







































  // -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ //

    // public spin(): void {
      // setInterval(function(){
        // $('#gameButtons').css('-webkit-transform: rotate(10deg); -moz-transform: rotate(10deg); -ms-transform: rotate(10deg); transform: rotate(10deg);');
        // $('#gameButtons').css('transform: rotate(0deg);');
      // },1000);
    // }

    // public oldButtonActions(): void {
    //   // BUTTON TRIGGERS
    //   // this sucks - find a better way to bind functions to buttons
    //   (function(){
    //     var ua = navigator.userAgent,isMobile = /Mobile/.test(ua);
    //     if(isMobile){
    //       this.playButton.bind('touchend',function(){ this.toggleGameIO('play') });
    //       this.stopButton.bind('touchend',function(){ this.toggleGameIO('stop') });
    //       // this.buttons.bind('touchstart',function(e){ e.stopPropagation(); e.preventDefault(); this.buttons.removeClass('active'); $(this).addClass('active'); });
    //       this.buttons.bind('touchend',function(e){ e.stopPropagation(); e.preventDefault(); $(this).removeClass('active'); this.toggleGameIO(this); });
    //     }else{
    //       // buttons.bind('click',function(e){ e.stopPropagation(); e.preventDefault(); this.toggleGameIO(this) });
    //       this.playButton.bind('mouseup',function(){ this.toggleGameIO('play') });
    //       this.stopButton.bind('mouseup',function(){ this.toggleGameIO('stop') });
    //       // this.buttons.bind('mousedown',function(e){ e.stopPropagation(); e.preventDefault(); this.buttons.removeClass('active'); $(this).addClass('active'); });
    //       this.buttons.bind('mouseup',function(e){ e.stopPropagation(); e.preventDefault(); $(this).removeClass('active'); this.toggleGameIO(this); });
    //     }
    //   }).bind(this)();
    //
    // }


}
