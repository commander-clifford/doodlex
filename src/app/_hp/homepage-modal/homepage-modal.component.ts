import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-homepage-modal',
  templateUrl: './homepage-modal.component.html',
  styleUrls: ['./homepage-modal.component.scss']
})
export class HomepageModalComponent {

  constructor(
    public dialogRef: MatDialogRef<HomepageModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
