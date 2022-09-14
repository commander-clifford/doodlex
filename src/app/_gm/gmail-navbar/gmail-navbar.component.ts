import { Component, OnInit } from '@angular/core';
import { DOODLETYPES } from '../../doodles/doodletypes';
import { Globals } from '../../globals';
import { GMAILTHEMES } from '../gmail/gmail-themes';

@Component({
  selector: 'app-gmail-navbar',
  templateUrl: './gmail-navbar.component.html',
  styleUrls: ['./gmail-navbar.component.scss']
})

export class GmailNavbarComponent implements OnInit {

  public doodletypes = DOODLETYPES;
  public gmailThemes = GMAILTHEMES;

  constructor(
    public globals: Globals,
  ) { }

  ngOnInit() {
  }

}
