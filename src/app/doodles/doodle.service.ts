import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Globals } from '../globals';

@Injectable({
  providedIn: 'root'
})

export class DoodleService {

  private sub;
  private adi;

  constructor(
    private route: ActivatedRoute,
    private globals: Globals,
  ) { }

  getADI(route){
    this.sub = route
      .queryParams
      .subscribe(params => {
        console.log('params',params);
        // Defaults to 0 if no query param provided.
        this.adi = params['doodleID'] || 0;
      });

    this.globals.activeDoodleID = this.adi ? this.adi : this.globals.activeDoodleID;

    console.log('XXXX',this.globals.activeDoodleID);
  }


}
