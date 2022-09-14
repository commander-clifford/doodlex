import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ComposeService } from '../../_gm/compose/compose.service';

@Component({
  selector: 'app-social-share',
  templateUrl: './social-share.component.html',
  styleUrls: ['./social-share.component.scss'],

})
export class SocialShareComponent implements OnInit {

  constructor(
    public composeService: ComposeService,
    public dialogRef: MatDialogRef<SocialShareComponent>,

  ) { }

  ngOnInit() {
  }

  openCompose(): void {
    this.dialogRef.close();
    this.composeService.open(true);
  }

}
