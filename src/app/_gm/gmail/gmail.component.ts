import { Component, OnInit, ViewChild, HostBinding, HostListener } from '@angular/core';
import { Globals } from '../../globals';
import { DOODLETYPES } from '../../doodles/doodletypes';
import { DoodleService } from '../../doodles/doodle.service';
import { GMAILTHEMES } from './gmail-themes';
import { AppStateService } from '../../app-state.service';
import { SidenavService } from '../gmail-drawer/drawer.service'
import { MatSidenav } from '@angular/material';
import { ViewEncapsulation } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { ComposeService } from '../compose/compose.service';
import { ComposeComponent } from '../compose/compose.component';
import { GmailThemesComponent } from '../gmail-themes/gmail-themes.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gmail',
  templateUrl: './gmail.component.html',
  styleUrls: ['./gmail.component.scss'],
  host: {'(window:resize)': 'onResize($event)'},
})

export class GmailComponent implements OnInit {

  @ViewChild('gmailDrawer') public sidenav: MatSidenav;

  public doodletypes = DOODLETYPES;
  public gmailThemes = GMAILTHEMES;
  public isMobileResolution: boolean;
  public unreadEmails: object[] = [
    {
      name:'Salit Kulla',
      star: false,
      check: false,
      subject:'Trip to Yosemite National Park',
      body:'Planning for a trip in July. Are you interested in...',
      date: '3:15 PM'
    },
    {
      name:'Brianna, John',
      star: false,
      check: false,
      subject:'Surf Sunday?',
      body:"Great. Let's meet at Jack's at 8",
      date: '2:59 PM'
    },
    {
      name:'Cameron, Tyler, Dylan',
      star: false,
      check: false,
      subject:'Pictures from board game last night',
      body:'lol',
      date: '10:11 AM'
    },
  ];
  public everyThingElse: object[] = [
    {
      name: "Luis, me, Anastasia",
      star: false,
      check: false,
      subject: "Best Japanese Restaurant in Seattle",
      body: "We haven't reall tried and Japaniese places...",
      date: "2:21 PM",
    },
    {
      name: "Cameron, Daniel",
      star: false,
      check: false,
      subject: "Wanna grab lunch in the city?",
      body: "Friday works for me!",
      date: "1:47 PM",
    },
    {
      name: "Nick Kortendick",
      star: false,
      check: false,
      subject: "Presentation",
      body: "Hello. Great job today. Can you share the slides the you pres...",
      date: "1:16 PM",
    },
    {
      name: "Tim Greer",
      star: false,
      check: false,
      subject: "Business Trip",
      body: "Hello. I made a reservation for the hotel near the office. It's a...",
      date: "12:23",
    },
    {
      name: "Luis, me, Anastasia",
      star: false,
      check: false,
      subject: "Best Japanese Restaurant in Seattle",
      body: "We haven't reall tried and Japaniese places...",
      date: "2:21 PM",
    },
    {
      name: "Cameron, Daniel",
      star: false,
      check: false,
      subject: "Wanna grab lunch in the city?",
      body: "Friday works for me!",
      date: "1:47 PM",
    },
    {
      name: "Nick Kortendick",
      star: false,
      check: false,
      subject: "Presentation",
      body: "Hello. Great job today. Can you share the slides the you pres...",
      date: "1:16 PM",
    },
    {
      name: "Tim Greer",
      star: false,
      check: false,
      subject: "Business Trip",
      body: "Hello. I made a reservation for the hotel near the office. It's a...",
      date: "12:23",
    },
    {
      name: "Luis, me, Anastasia",
      star: false,
      check: false,
      subject: "Best Japanese Restaurant in Seattle",
      body: "We haven't reall tried and Japaniese places...",
      date: "2:21 PM",
    },
    {
      name: "Cameron, Daniel",
      star: false,
      check: false,
      subject: "Wanna grab lunch in the city?",
      body: "Friday works for me!",
      date: "1:47 PM",
    },
    {
      name: "Nick Kortendick",
      star: false,
      check: false,
      subject: "Presentation",
      body: "Hello. Great job today. Can you share the slides the you pres...",
      date: "1:16 PM",
    },
    {
      name: "Tim Greer",
      star: false,
      check: false,
      subject: "Business Trip",
      body: "Hello. I made a reservation for the hotel near the office. It's a...",
      date: "12:23",
    },
    {
      name: "Luis, me, Anastasia",
      star: false,
      check: false,
      subject: "Best Japanese Restaurant in Seattle",
      body: "We haven't reall tried and Japaniese places...",
      date: "2:21 PM",
    },
    {
      name: "Cameron, Daniel",
      star: false,
      check: false,
      subject: "Wanna grab lunch in the city?",
      body: "Friday works for me!",
      date: "1:47 PM",
    },
    {
      name: "Nick Kortendick",
      star: false,
      check: false,
      subject: "Presentation",
      body: "Hello. Great job today. Can you share the slides the you pres...",
      date: "1:16 PM",
    },
    {
      name: "Tim Greer",
      star: false,
      check: false,
      subject: "Business Trip",
      body: "Hello. I made a reservation for the hotel near the office. It's a...",
      date: "12:23",
    },
    {
      name: "Luis, me, Anastasia",
      star: false,
      check: false,
      subject: "Best Japanese Restaurant in Seattle",
      body: "We haven't reall tried and Japaniese places...",
      date: "2:21 PM",
    },
    {
      name: "Cameron, Daniel",
      star: false,
      check: false,
      subject: "Wanna grab lunch in the city?",
      body: "Friday works for me!",
      date: "1:47 PM",
    },
    {
      name: "Nick Kortendick",
      star: false,
      check: false,
      subject: "Presentation",
      body: "Hello. Great job today. Can you share the slides the you pres...",
      date: "1:16 PM",
    },
    {
      name: "Tim Greer",
      star: false,
      check: false,
      subject: "Business Trip",
      body: "Hello. I made a reservation for the hotel near the office. It's a...",
      date: "12:23",
    },
    {
      name: "Luis, me, Anastasia",
      star: false,
      check: false,
      subject: "Best Japanese Restaurant in Seattle",
      body: "We haven't reall tried and Japaniese places...",
      date: "2:21 PM",
    },
    {
      name: "Cameron, Daniel",
      star: false,
      check: false,
      subject: "Wanna grab lunch in the city?",
      body: "Friday works for me!",
      date: "1:47 PM",
    },
    {
      name: "Nick Kortendick",
      star: false,
      check: false,
      subject: "Presentation",
      body: "Hello. Great job today. Can you share the slides the you pres...",
      date: "1:16 PM",
    },
    {
      name: "Tim Greer",
      star: false,
      check: false,
      subject: "Business Trip",
      body: "Hello. I made a reservation for the hotel near the office. It's a...",
      date: "12:23",
    },
  ];

  constructor(
    public globals: Globals,
    public sidenavService: SidenavService,
    public composeService: ComposeService,
    public appStateService: AppStateService,
    public bottomSheet: MatBottomSheet,
    public dialog: MatDialog,
    public route: ActivatedRoute,
    public doodleService: DoodleService,
  ) {
    this.doodleService.getADI(this.route);
    this.isMobileResolution = appStateService.getIsMobileResolution();
    this.globals.isMobileResolution = this.isMobileResolution;
  }

  ngOnInit() {
    this.sidenavService.setSidenav(this.sidenav);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(GmailThemesComponent, {
      // width: '250px',
      // data: {name: this.name, animal: this.animal},
      panelClass: 'gmail-themes-dialog-container'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }



  openBottomSheet(): void {
    this.composeService.open(false);
  }



  onResize(event) {
    // this.isMobileResolution = this.appStateService.getIsMobileResolution();
    // this.globals.isMobileResolution = this.isMobileResolution;
  }

}
