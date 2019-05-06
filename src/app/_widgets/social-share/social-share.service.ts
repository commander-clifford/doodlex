import { Injectable, Output, EventEmitter } from '@angular/core'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SocialShareComponent } from './social-share.component';

@Injectable({
  providedIn: 'root'
})
export class SocialShareService {

  constructor(
    private dialog: MatDialog,
  ) { }

  open() {
    this.dialog.open(
      SocialShareComponent, {
        hasBackdrop: true,
        autoFocus: true,
        panelClass: 'social-share-modal',
        ariaLabel: 'Doodle Experience',
      }
    );
  }

}
