import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { GMAILTHEMES } from '../gmail/gmail-themes';
import { Globals } from '../../globals';

@Component({
  selector: 'app-gmail-themes',
  templateUrl: './gmail-themes.component.html',
  styleUrls: ['./gmail-themes.component.scss']
})
export class GmailThemesComponent implements OnInit {

  private gmailThemes = GMAILTHEMES;

  constructor(
    private globals: Globals,
    public dialogRef: MatDialogRef<GmailThemesComponent>,
  ) { }

  ngOnInit() {


  }

  optInOut(): void {

    if(this.globals.gmailDoodleOptIn){ // if its optIn
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

    } else {
      // else opt in

      this.globals.gmailDoodleOptIn = true;

      this.globals.gmailDoodleNo = false;
      this.globals.gmailDoodleLevelOne = true;
      this.globals.gmailDoodleLevelTwo = false;

      this.globals.gmailDecorNo = false;
      this.globals.gmailDecorLevelOne = true;
      this.globals.gmailDecorLevelTwo = false;
      this.globals.gmailDecorLevelThree = false;
      this.globals.gmailDecorLevelFour = false;

      this.globals.useNegativeOGBSpace = true;
      this.globals.activeDoodleTheme = true;

    }

  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
