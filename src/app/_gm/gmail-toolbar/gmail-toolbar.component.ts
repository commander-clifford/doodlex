import { Component, OnInit, HostListener, Inject} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { DOODLETYPES } from '../../doodles/doodletypes';
import { GMAILTHEMES } from '../gmail/gmail-themes';
import { Globals } from '../../globals';
import { SidenavService } from '../gmail-drawer/drawer.service';
import { DoodleSheetService } from '../../doodles/doodle-sheet/doodle-sheet.service';
import { ShareService } from '../../_gm/share/share.service';
import { ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-gmail-toolbar',
  templateUrl: './gmail-toolbar.component.html',
  styleUrls: ['./gmail-toolbar.component.scss'],
  // encapsulation: ViewEncapsulation.None, // fixes dynamic content/styles issue

})

export class GmailToolbarComponent implements OnInit {

  public doodletypes = DOODLETYPES;
  public gmailThemes = GMAILTHEMES;

  constructor(
    public globals: Globals,
    public sidenav: SidenavService,
    public doodleSheetService: DoodleSheetService,
    public shareService: ShareService,
    @Inject(DOCUMENT) public document: Document
  ) { }

  // @HostListener('mouseover')
  // onMouseOver() {
  //   this.openDoodle()
  // }
  //
  // @HostListener('mouseout')
  // onMouseOut() {
  //
  //   setTimeout(function(){ this.closeDoodle() }.bind(this), 100);
  //
  // }

  ngOnInit(){}

  ngAfterViewInit(){

    setTimeout(function(){
      document.getElementById("tri").click();
    },400);

  }

  public menuClosed():void {
    console.log('menu closed');
    this.document.body.classList.remove('noscroll');
    this.globals.cardExpanded = false;
    this.globals.optOutWindowIsShown = false;
  }

  public menuOpened():void {
    console.log('menu opened');
    this.document.body.classList.add('noscroll');
  }

  public toggleDrawer():void {
    this.sidenav.toggle();
  }

  public openDoodle():void {
    alert('adfs');
    this.shareService.open();
  }

  public closeDoodle():void {
    this.shareService.close();
  }

}
