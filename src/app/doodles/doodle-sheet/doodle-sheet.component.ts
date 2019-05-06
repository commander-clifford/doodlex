import { Component, OnInit } from '@angular/core';
import { Globals } from '../../globals';
import { DOODLETYPES } from '../doodletypes';
import { ViewEncapsulation } from '@angular/core';
import { ComposeService } from '../../_gm/compose/compose.service';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-doodle-sheet',
  templateUrl: './doodle-sheet.component.html',
  styleUrls: ['./doodle-sheet.component.scss'],
  encapsulation: ViewEncapsulation.None, // fixes dynamic content/styles issue
})
export class DoodleSheetComponent implements OnInit {

  constructor(
    private globals: Globals,
    private composeService: ComposeService,
    private bottomSheet: MatBottomSheet,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<DoodleSheetComponent>,
  ) { }

  private doodletypes = DOODLETYPES;
  private doodle = this.doodletypes[this.globals.activeDoodleID];

  ngOnInit() {
  }

  openCompose(): void {
    this.composeService.open(true);
    this.dialogRef.close();
  }

  closeCompose(): void {
    this.bottomSheet.dismiss();
    this.dialogRef.close();
  }

}
