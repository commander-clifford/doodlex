import { Component, OnInit, Input, HostListener, Directive,ElementRef,Renderer } from '@angular/core';
import { MessageService } from '../../messages/message.service';
import { SEARCHRESULTS } from '../../search-results/search-results';
import { DOODLETYPES } from '../../doodles/doodletypes';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Globals } from '../../globals';
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
  selector: 'app-srp-toolbar',
  templateUrl: './srp-toolbar.component.html',
  styleUrls: ['./srp-toolbar.component.scss']
})

export class SrpToolbarComponent implements OnInit {

  @Input() query: string;

  private doodletypes = DOODLETYPES;

  searchResults = SEARCHRESULTS;
  selectedResult;
  values = '';
  private searchQuery: string;
  secondaryShown: boolean = false;
  scrollHistory;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private messageService: MessageService,
    private globals: Globals,
    private el: ElementRef
  ) {}

  @HostListener('window:scroll', ['$event'])

  onWindowScroll($event) {

    const secondaryToolbar = this.el.nativeElement.children[0];
    const primaryToolbar = this.el.nativeElement.children[1];
    const primaryToolbarBottom = primaryToolbar.childNodes[1];
    const toolbarHeight = this.el.nativeElement.children[1].offsetHeight;

    if(!this.globals.isMobileResolution && this.globals.srpToolbarToggle){
      console.log('show/hide')
      if( (window.scrollY >= toolbarHeight) && !this.secondaryShown ){
        this.secondaryShown = true;
        console.log('SHOW IT');

        TweenMax.to(secondaryToolbar, 0.8, {
          top: '0px',
          autoAlpha: 1,
          ease: Power4.easeInOut,
        });

      } else if( (window.scrollY <= toolbarHeight) && this.secondaryShown ) {
        this.secondaryShown = false;
        console.log('HIDE IT');

        TweenMax.to(secondaryToolbar, 0.8, {
          top: '-72px',
          autoAlpha: 0,
          ease: Power4.easeInOut,
        });

      }

    } else

    if(!this.globals.isMobileResolution && this.globals.srpToolbarMorph){




      // console.log("scrolling...",window.scrollY,toolbarHeight);
      console.log(window.scrollY);
      if(window.scrollY<54){

        primaryToolbar.style.boxShadow = "none";
        if(this.globals.srpToolbarMorph && this.globals.srpWholePageDecor){
          TweenMax.to(primaryToolbar, 0.2, {
            backgroundColor: `rgba(255,255,255,0)`,
          });
        }

        if(this.scrollHistory > window.scrollY){
          console.log('going up');
          TweenMax.to(primaryToolbarBottom, 0.05, {
            height: 54 - window.scrollY,
            autoAlpha: 1-(window.scrollY/48),
            // ease: Power4.easeInOut,
          });
        } else {
          console.log('going down');
          TweenMax.to(primaryToolbarBottom, 0.05, {
            height: 54 - window.scrollY,
            autoAlpha: 1-(window.scrollY/48),
            // ease: Power4.easeInOut,
          });
        }

        this.scrollHistory = window.scrollY;

      } else {

      }

      if(window.scrollY>=44 && window.scrollY<=64){
        TweenMax.to(primaryToolbar, 0.05, {
          paddingTop: 20-((window.scrollY-0)-44)/2 , // 20 – 10
        });
        TweenMax.to(primaryToolbarBottom, 0.05, {
          paddingTop: 14-((window.scrollY-0)-44)/2 , // 20 – 10
        });
      } else
      if(window.scrollY<54){
        TweenMax.to(primaryToolbar, 0.4, {
          paddingTop: 20,
        });
        TweenMax.to(primaryToolbarBottom, 0.4, {
          paddingTop: 14,
        });
      } else
      if(window.scrollY>54){
        primaryToolbar.style.boxShadow = "0 1px 6px 0 rgba(32,33,36,0.28)";
        TweenMax.to(primaryToolbar, 0.4, {
          paddingTop: 10,
        });
        TweenMax.to(primaryToolbarBottom, 0.4, {
          paddingTop: 4,
          height: 0,
          autoAlpha: 0,
        });
        if(this.globals.srpToolbarMorph && this.globals.srpWholePageDecor){
          TweenMax.to(primaryToolbar, 0.4, {
            backgroundColor: `rgba(255,255,255,0.85)`,
          });
        }
      }




    }
  }

  private runUpdateQuery(event: any): void {
    console.log(event.code);
    this.values += event.target.value + ' | ';
    console.log('this.values',this.values);
    this.globals.searchQuery = this.searchQuery.trim();
    console.log("this.globals.searchQuery",this.globals.searchQuery.trim());
    if(event.code == 'Enter' || event.code == 'NumpadEnter'){
      this.checkResults();
    }
  }

  private checkResults(): void {
    // if(this.globals.searchQuery){
      this.navToQueryResults(this.globals.searchQuery);
    // } else {
    //   this.alertNoQuery();
    // }
  }

  private alertNoQuery(): void {
    alert("Not are those who 'search' are lost");
  }

  private navToQueryResults(q): void {
    const query = this.globals.searchQuery ? this.globals.searchQuery.trim() : q;
    if(this.globals.eehStep > 0 && this.globals.isEeh){
      const theme = this.globals.eehTheme ? "/" + this.globals.eehTheme : null;
      const step = this.globals.eehStep ? "/" + this.globals.eehStep : null;
      this.router.navigate([ "/results/" + query + theme + step ]);
    } else {
      this.router.navigate([ "/results/" + query ]);
    }
  }

  private changeSrpDoodleType(x): void {

    // TODO this shoudl be a service
    if(x === 'fullReplace'){

      this.globals.logoOpenLetterReplace = false;
      this.globals.logoStrictLetterReplace = false;

      this.globals.logoFullReplace = true;
    }else
    if(x === 'openLetterReplace'){

      this.globals.logoFullReplace = false;
      this.globals.logoStrictLetterReplace = false;

      this.globals.logoOpenLetterReplace = true;
    }else
    if(x === 'letterReplace'){

      this.globals.logoFullReplace = false;
      this.globals.logoOpenLetterReplace = false;

      this.globals.logoStrictLetterReplace = true;
    }
    // TODO this shoudl be a service

  }
  private changeStyle(x): void {

    // TODO this shoudl be a service

    if(x === 'srpNoDecor'){

      this.globals.srpSimpleToolbarDecor = false;
      this.globals.srpElaborateToolbarDecor = false;
      this.globals.srpWholePageDecor = false;

      this.globals.srpNoDecor = true;
    }else
    if(x === 'srpSimpleToolbarDecor'){

      this.globals.srpNoDecor = false;
      this.globals.srpElaborateToolbarDecor = false;
      this.globals.srpWholePageDecor = false;

      this.globals.srpSimpleToolbarDecor = true;
    }else
    if(x === 'srpElaborateToolbarDecor'){

      this.globals.srpNoDecor = false;
      this.globals.srpSimpleToolbarDecor = false;
      this.globals.srpWholePageDecor = false;

      this.globals.srpElaborateToolbarDecor = true;
    }else
    if(x === 'srpWholePageDecor'){

      this.globals.srpNoDecor = false;
      this.globals.srpSimpleToolbarDecor = false;
      this.globals.srpElaborateToolbarDecor = false;

      this.globals.srpWholePageDecor = true;
    }
    // TODO this shoudl be a service

  }

  prototypeClick(message): void {
    this.messageService.testAlert(message);
  }

  ngOnInit() {
    console.log("SRP-TOOLBAR query:",this.query);

    this.globals.searchQuery = this.query;
    this.searchQuery = this.query;
  }

}
