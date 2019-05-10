import { Component, OnInit, Input } from '@angular/core';
import { Globals } from '../globals';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DOODLETYPES } from '../doodles/doodletypes';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.scss'],
  encapsulation: ViewEncapsulation.None, // fixes dynamic content/styles issue
})

export class AppMenuComponent implements OnInit {

  @Input() local: string;

  private doodletypes = DOODLETYPES;
  private doodletypesOrdered;
  private activeDoodletypes;

  constructor(
    private globals: Globals,
    private route: ActivatedRoute,
    private router: Router) {







  }

  ngOnInit() {

    console.log('here');

    // this.activeDoodletypes = (this.doodletypes) => {
    //   const is = field => item => ( item[field] )
    //   return this.doodletypes.filter(is('isActive'))
    // }


    this.activeDoodletypes = this.doodletypes.filter(doodletype => doodletype.isActive === true);
    // this.booksByStoreID = this.books.filter(book => book.store_id === this.store.id);


    console.log('-----'+this.activeDoodletypes);

  }

  private setActiveDoodle(id, qry): void {

    console.log('setActiveDoodle',id);

    this.changeSrpDoodleType('openLetterReplace'); // all logos have this property

    this.globals.activeDoodleID = id;

    if(this.local === 'search'){}
    else
    if (this.local === 'results'){}

  }




  private changeGmailDoodleType(x): void {

    if(x === 'light'){

      // this.globals.gmailDoodleNo = false;
      this.globals.gmailDoodleLevelOne = false;
      this.globals.gmailDoodleLevelTwo = false;

      this.globals.gmailDoodleNo = true;

    }else
    if(x === 'medium'){

      this.globals.gmailDoodleNo = false;
      // this.globals.gmailDoodleLevelOne = false;
      this.globals.gmailDoodleLevelTwo = false;

      this.globals.gmailDoodleLevelOne = true;

    }else
    if(x === 'levelFour'){

      this.globals.gmailDoodleNo = false;
      this.globals.gmailDoodleLevelOne = false;
      // this.globals.gmailDoodleLevelTwo = true;

      this.globals.gmailDoodleLevelTwo = true;

    }

  }

  private changeGmailDecor(x): void {



    if(x === 'gmailDecorNo'){

      this.globals.gmailDecorNo = true;

      this.globals.gmailDecorLevelOne = false;
      this.globals.gmailDecorLevelTwo = false;
      this.globals.gmailDecorLevelThree = false;
      this.globals.gmailDecorLevelFour = false;

    }else
    if(x === 'gmailDecorLevelOne'){

      this.globals.gmailDecorLevelOne = true;

      this.globals.gmailDecorNo = false;
      this.globals.gmailDecorLevelTwo = false;
      this.globals.gmailDecorLevelThree = false;
      this.globals.gmailDecorLevelFour = false;

    }else
    if(x === 'gmailDecorLevelTwo'){

      this.globals.gmailDecorLevelTwo = true;

      this.globals.gmailDecorLevelThree = false;
      this.globals.gmailDecorNo = false;
      this.globals.gmailDecorLevelOne = false;
      this.globals.gmailDecorLevelFour = false;

    }else
    if(x === 'gmailDecorLevelThree'){

      this.globals.gmailDecorLevelThree = true;

      this.globals.gmailDecorLevelTwo = false;
      this.globals.gmailDecorNo = false;
      this.globals.gmailDecorLevelOne = false;
      this.globals.gmailDecorLevelFour = false;

    }else
    if(x === 'gmailDecorLevelFour'){

      this.globals.gmailDecorLevelFour = true;

      this.globals.gmailDecorNo = false;
      this.globals.gmailDecorLevelOne = false;
      this.globals.gmailDecorLevelTwo = false;
      this.globals.gmailDecorLevelThree = false;

    }


  }

  private changeGmailSearchBarColor(x): void {

    console.log('x',x);

    if(x === 'l1'){


      this.globals.gmailSearchBarNo = true;
      this.globals.gmailSearchBarLevelOne = false;
      this.globals.gmailSearchBarLevelTwo = false;
      this.globals.gmailSearchBarLevelThree = false;
      this.globals.gmailSearchBarLevelFour = false;

    }else
    if(x === 'l2'){

      this.globals.gmailSearchBarNo = false;
      this.globals.gmailSearchBarLevelOne = true;
      this.globals.gmailSearchBarLevelTwo = false;
      this.globals.gmailSearchBarLevelThree = false;
      this.globals.gmailSearchBarLevelFour = false;

    }else
    if(x === 'l3'){

      this.globals.gmailSearchBarLevelOne = false;
      this.globals.gmailSearchBarLevelTwo = false;
      this.globals.gmailSearchBarLevelThree = true;
      this.globals.gmailSearchBarLevelFour = false;

    }else
    if(x === 'l4'){

      this.globals.gmailSearchBarLevelOne = false;
      this.globals.gmailSearchBarLevelTwo = false;
      this.globals.gmailSearchBarLevelThree = false;
      this.globals.gmailSearchBarLevelFour = true;

    }


  }




  private changeSrpToolbarBehavior(x): void {
    if(x === 'toggle'){
      this.globals.srpToolbarMorph = false;
      this.globals.srpToolbarToggle = true;
    } else
    if(x === 'morph'){
      this.globals.srpToolbarToggle = false;
      this.globals.srpToolbarMorph = true;
    }
  }

  private changeSrpDoodleType(x): void {

    if(x === 'fullReplace'){

      this.globals.logoOpenLetterReplace = false;
      this.globals.logoStrictLetterReplace = false;

      this.globals.logoFullReplace = true;
    }else
    if(x === 'openLetterReplace'){

      this.globals.logoFullReplace = false;
      this.globals.logoStrictLetterReplace = false;

      this.globals.logoOpenLetterReplace = true;
    }else
    if(x === 'letterReplace'){

      this.globals.logoFullReplace = false;
      this.globals.logoOpenLetterReplace = false;

      this.globals.logoStrictLetterReplace = true;
    }

  }

  private changeSrpDecor(x): void {

    if(x === 0){

      this.globals.srpL0Decor = true;

      this.globals.srpL0Decor = false;
      this.globals.srpL1Decor = false;
      this.globals.srpL2Decor = false;
      this.globals.srpL3Decor = false;

      this.globals.srpSimpleToolbarDecor = false;
      this.globals.srpElaborateToolbarDecor = false;
      this.globals.srpWholePageDecor = false;


    }else
    if(x === 1){

      this.globals.srpSimpleToolbarDecor = false;
      this.globals.srpElaborateToolbarDecor = false;
      this.globals.srpWholePageDecor = false;


      this.globals.srpL0Decor = false;
      this.globals.srpL1Decor = true;
      this.globals.srpL2Decor = false;
      this.globals.srpL3Decor = false;




    }else
    if(x === 2){

      this.globals.srpSimpleToolbarDecor = false;
      this.globals.srpElaborateToolbarDecor = false;
      this.globals.srpWholePageDecor = false;
      this.globals.srpElaborateToolbarDecor = false;
      this.globals.srpSimpleToolbarDecor = false;
      this.globals.srpWholePageDecor = false;


      this.globals.srpL0Decor = false;
      this.globals.srpL1Decor = false;
      this.globals.srpL2Decor = true;
      this.globals.srpL3Decor = false;


    }else
    if(x === 3){

      this.globals.srpWholePageDecor = true;

      this.globals.srpL0Decor = false;
      this.globals.srpSimpleToolbarDecor = false;
      this.globals.srpElaborateToolbarDecor = false;

      this.globals.srpL0Decor = false;
      this.globals.srpL1Decor = false;
      this.globals.srpL2Decor = false;
      this.globals.srpL3Decor = true;

    }


  }




  private toggleMobileLayout(): void {
    this.globals.isMobileResolution = !this.globals.isMobileResolution;
  }

  private toggleMobileFrame(): void {
    this.globals.useMobileDeviceFrame = !this.globals.useMobileDeviceFrame;
  }

  private changeLogoColor(x): void {
    if(x == 'standard'){
      this.globals.gmailDoodleAlternativeColor = false;
      this.globals.gmailDoodleStandardColor = true;
    } else {
      this.globals.gmailDoodleAlternativeColor = true;
      this.globals.gmailDoodleStandardColor = false;
    }
  }



}
