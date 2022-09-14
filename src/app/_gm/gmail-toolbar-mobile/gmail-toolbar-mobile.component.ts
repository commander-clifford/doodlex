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

  public doodletypes = DOODLETYPES;

  constructor(
    public globals: Globals,
    public sidenav: SidenavService

  ) { }

  toggleActive:boolean = false;


  ngOnInit() {
  }

  public toggleDrawer():void {

    console.log('Clicked');

		this.toggleActive = !this.toggleActive;

		this.sidenav.toggle();



	}

}
