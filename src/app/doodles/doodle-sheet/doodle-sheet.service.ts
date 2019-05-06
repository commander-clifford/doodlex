import { Injectable } from '@angular/core';
import { DoodleSheetComponent } from './doodle-sheet.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class DoodleSheetService {

  constructor(
    public dialog: MatDialog,
  ) { }

  open() {
    this.dialog.open(DoodleSheetComponent,{
      hasBackdrop: true,
      panelClass: 'doodle-sheet',
      ariaLabel: 'The Doodle Experience',
      width: 'auto',
      data: {}
    });
  }

}
