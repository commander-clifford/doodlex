import { Component, OnInit, HostListener } from '@angular/core';
import { Globals } from '../../globals';
import { DOODLETYPES } from '../../doodles/doodletypes';
import { ComposeService } from '../compose/compose.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

import { GmailSnackbarComponent } from '../../_gm/gmail-snackbar/gmail-snackbar.component';
import { SocialShareService } from '../../_widgets/social-share/social-share.service';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss'],
  encapsulation: ViewEncapsulation.None, // fixes dynamic content/styles issue
})

export class ShareComponent implements OnInit {

  private doodletypes = DOODLETYPES;
  private archiveOn: boolean = false;
  private doodle = this.doodletypes[this.globals.activeDoodleID];

  constructor(
    private globals: Globals,
    private composeService: ComposeService,
    private snackBar: MatSnackBar,
    private socialShareService: SocialShareService,
    private bottomSheet: MatBottomSheet,
  ) {}

  @HostListener('document:scroll', ['$event'])

  onWindowScroll($event) {
    if (!this.globals.cardExpanded){
      this.globals.cardExpanded = true;
    }
  }

  ngOnInit() {
    console.log('this.globals.activeDoodleID',this.globals.activeDoodleID);
  }

  doodleOptIn(): void {
    this.globals.optOutWindowIsShown = !this.globals.optOutWindowIsShown;
    this.globals.gmailDoodleOptIn = true;
    let config = new MatSnackBarConfig();
    config.duration = 4000;
    this.snackBar.open("Awesome! You'll love what's next 🕺🏻", "CHEERS", config);

  }

  doodleOptOut(): void {

    this.globals.activeDoodleID = 0;

    // opt out
    this.globals.gmailDoodleOptIn = false;

    this.globals.gmailDoodleNo = true;
    this.globals.gmailDoodleLevelOne = false;
    this.globals.gmailDoodleLevelTwo = false;

    this.globals.gmailDecorNo = true;
    this.globals.gmailDecorLevelOne = false;
    this.globals.gmailDecorLevelTwo = false;
    this.globals.gmailDecorLevelThree = false;
    this.globals.gmailDecorLevelFour = false;

    this.globals.useNegativeOGBSpace = false;
    this.globals.activeDoodleTheme = false;



    let config = new MatSnackBarConfig();
    config.duration = 4000;
    this.snackBar.open("Sorry to bother ☹️  Configure this in Settings -> Themes", "UNDO", config);

  }

  openCompose(): void {
    this.composeService.open(true);
  }

  openSocialShareModal(): void {
    this.socialShareService.open();
  }


  closeDoodleSheet(): void {
    this.bottomSheet.dismiss();
  }

  closeCompose(): void {
    this.bottomSheet.dismiss();
  }

  openSocialShare(): void {
    alert('Social share modal here');
  }

}
