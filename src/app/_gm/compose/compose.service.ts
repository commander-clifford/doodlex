import { Injectable, Output, EventEmitter } from '@angular/core'
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { ComposeComponent } from '../compose/compose.component';

@Injectable()

export class ComposeService {

  constructor(
    private bottomSheet: MatBottomSheet,
  ){}

  open(prepop) {

    this.bottomSheet.open(
      ComposeComponent,
      {
        data: { prepop },
        hasBackdrop: false,
        panelClass: 'compose-sheet',
        ariaLabel: 'Compose new email'
      }
    );

  }



}
