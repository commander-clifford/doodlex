import { Component, OnInit } from '@angular/core';
import { DOODLETYPES } from '../../doodles/doodletypes';
import { Globals } from '../../globals';
import { SidenavService } from '../gmail-drawer/drawer.service'


@Component({
  selector: 'app-gmail-toolbar-mobile',
  templateUrl: './gmail-toolbar-mobile.component.html',
  styleUrls: ['./gmail-toolbar-mobile.component.scss']
})
export class GmailToolbarMobileComponent implements OnInit {

  private doodletypes = DOODLETYPES;

  constructor(
    private globals: Globals,
    private sidenav: SidenavService

  ) { }

  toggleActive:boolean = false;


  ngOnInit() {
  }

  private toggleDrawer():void {

    console.log('Clicked');

		this.toggleActive = !this.toggleActive;

		this.sidenav.toggle();



	}

}
