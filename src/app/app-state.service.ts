import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AppStateService {

  private isMobileResolution: boolean;
  private mobileBreakPoint: number = 1140;

  constructor() {
    
  }

  public getIsMobileResolution(): boolean {
    if (window.innerWidth < this.mobileBreakPoint) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }
    return this.isMobileResolution;
  }

}
