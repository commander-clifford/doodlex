import { Injectable } from '@angular/core';

@Injectable()

export class Globals {


  // DOODLE

  activeDoodleID: number = 2;
  landingDoodle: string = null;







  // OGB / Gmail

  // add a button
  superInProductControlsSection: boolean = true;
  superInGoogleControlsSection: boolean = false;

  gmailDoodleOptIn: boolean;
  showOptOutOptions: boolean = true;
  userOptIn: boolean = false;
  userOptOut: boolean = false;
  activeDoodleTheme: boolean = true;

  seePencilVestor: boolean = false;
  seeSuperG: boolean = false;
  seeSuperD: boolean = false;
  seeVideogameAsset: boolean = false;

  hoverLeaveClose: boolean = false;

  useNegativeOGBSpace: boolean = true;

  cardExpanded: boolean = false;

  optOutWindowIsShown:boolean = false;

  // GMAIL

  gmailThemeId: number = 0;

  gmailDoodleNo = false;
  gmailDoodleLevelOne = true;
  gmailDoodleLevelTwo = false; // unused


  gmailDoodleAlternativeColor: boolean = false;
  gmailDoodleStandardColor: boolean = true;


  gmailDecorNo: boolean = false;
  gmailDecorLevelOne: boolean = true; // * doodle, color
  gmailDecorLevelTwo: boolean = false; // doodle, color, content bg
  gmailDecorLevelThree: boolean = false; // doodle, color, toolbar bg
  gmailDecorLevelFour: boolean = false; // doodle, color, content bg, toolbar bg

  gmailSearchBarNo: boolean = false;
  gmailSearchBarLevelOne: boolean = true;
  gmailSearchBarLevelTwo: boolean = false;
  gmailSearchBarLevelThree: boolean = false;
  gmailSearchBarLevelFour: boolean = false;


  // SRP Options
  logoFullReplace: boolean = false;
  logoOpenLetterReplace: boolean = true;
  logoStrictLetterReplace: boolean = false;

  srpBgColorNo: boolean = true;

  srpL0Decor: boolean = true;
  srpL1Decor: boolean = false;
  srpL2Decor: boolean = false;
  srpL3Decor: boolean = false;

  srpWholePageDecor: boolean = false;

  srpSimpleToolbarDecor: boolean = false;
  srpElaborateToolbarDecor: boolean = false;

  srpToolbarToggle: boolean = false;
  srpToolbarMorph: boolean = true;





  // ENVIRONMENT

  useMobileDeviceFrame: boolean = false;
  isMobileResolution: boolean = false;

  //

  theme: string = null;
  selectedSearchResults;
  searchQuery: string = '';
  isEeh: boolean;
  eggsFound: number = 0;
  eehTheme: string = '';
  eehStep: number = 0;

}
