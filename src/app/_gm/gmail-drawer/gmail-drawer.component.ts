import { Component, OnInit } from '@angular/core';
import { Globals } from '../../globals';
import { DOODLETYPES } from '../../doodles/doodletypes';

@Component({
  selector: 'app-gmail-drawer',
  templateUrl: './gmail-drawer.component.html',
  styleUrls: ['./gmail-drawer.component.scss']
})
export class GmailDrawerComponent implements OnInit {

  public doodletypes = DOODLETYPES;

  constructor(
    public globals: Globals,
  ) { }

  ngOnInit() {
  }

}
