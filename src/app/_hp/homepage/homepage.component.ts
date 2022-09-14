import { Component, OnInit, Inject } from '@angular/core';
import { MessageService } from '../../messages/message.service';
import { Globals } from '../../globals';
import { DOODLETYPES } from '../../doodles/doodletypes';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AppStateService } from '../../app-state.service';
import { DoodleService } from '../../doodles/doodle.service';

import {trigger, stagger, animate, style, group, query as q, transition, keyframes} from '@angular/animations';
const query = (s,a,o={optional:true})=>q(s,a,o);

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  host: {'(window:resize)': 'onResize($event)'}
})

export class HomepageComponent implements OnInit {

  public doodletypes = DOODLETYPES;
  public doodle;


  public isMobileResolution: boolean;

  public landingDoodle: string;

  constructor(
    public appStateService: AppStateService,
    public doodleService: DoodleService,
    public route: ActivatedRoute,
    public router: Router,
    public messageService: MessageService,
    public globals: Globals
  ) {

    this.isMobileResolution = appStateService.getIsMobileResolution();
    this.globals.isMobileResolution = this.isMobileResolution;

    this.landingDoodle  = this.route.snapshot.paramMap.get('landingDoodle') ? this.route.snapshot.paramMap.get('landingDoodle') : null;

    // this.landingDoodle = this.route.snapshot.paramMap.get('landingDoodle') ? this.route.snapshot.paramMap.get('landingDoodle') : this.globals.landingDoodle;


    // this.searchQuery = this.route.snapshot.paramMap.get('landingDoodle') ? this.route.snapshot.paramMap.get('landingDoodle') : '';

  }

  ngOnInit() {

    this.reset();

    this.doodleService.getADI(this.route);

    if(this.landingDoodle){
      this.setLandingDoodle(this.landingDoodle);
    }

  }

  onResize(event) {
    this.isMobileResolution = this.appStateService.getIsMobileResolution();
    this.globals.isMobileResolution = this.isMobileResolution;
  }

  public setLandingDoodle(landingDoodle): void {

    for (var i = 0; i < this.doodletypes.length; i++) {
      if ( this.doodletypes[i].triggers.indexOf(landingDoodle) >= 0 ) {
        console.log('set landing doodle: ', landingDoodle);
        this.globals.activeDoodleID = i;
        this.doodle = this.doodletypes[i];
        this.globals.landingDoodle = landingDoodle;  // TODO: depreciate landingDoodle for activeDoodle
      }
    }

  }

  public prototypeClick(event, message): void {
    this.messageService.testAlert(message);
  }

  public reset(): void {
    this.globals.searchQuery = null;
    this.globals.eggsFound = null;
    this.globals.eehTheme = null;
    this.globals.eehStep = null;
  }

}
