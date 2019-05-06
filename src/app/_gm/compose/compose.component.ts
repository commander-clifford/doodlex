import { Component, OnInit, Inject } from '@angular/core';
import { Globals } from '../../globals';
import { DOODLETYPES } from '../../doodles/doodletypes';
import {MAT_BOTTOM_SHEET_DATA} from '@angular/material';

import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';


@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.scss']
})

export class ComposeComponent implements OnInit {



  constructor(
    private globals: Globals,
    private bottomSheet: MatBottomSheet,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
  ) { }

  private doodletypes = DOODLETYPES;
  private doodle = this.doodletypes[this.globals.activeDoodleID];

  ngOnInit() {
    console.log('this.data',this.data);
  }

  closeCompose(): void {
    this.bottomSheet.dismiss();
  }

}
