import { Injectable, Output, EventEmitter } from '@angular/core'
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { ShareComponent } from '../share/share.component';

@Injectable({
  providedIn: 'root'
})

export class ShareService {

  constructor(
    private bottomSheet: MatBottomSheet,
  ){
      console.log('bottomSheet',bottomSheet);
  }



  open():void {
    console.log('open this.bottomSheet',this.bottomSheet);
    this.bottomSheet.open(
      ShareComponent, {
        hasBackdrop: false,
        panelClass: 'share-sheet',
        ariaLabel: 'Doodle Experience',
      }
    );
  }


  close():void {
    console.log('close this.bottomSheet',this.bottomSheet);
    this.bottomSheet.dismiss();
  }

}
