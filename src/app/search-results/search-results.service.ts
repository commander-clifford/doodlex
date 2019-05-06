import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Globals } from '../globals';
import { SEARCHRESULTS } from './search-results';

@Injectable({
  providedIn: 'root'
})

export class SearchResultsService {

  private searchResults = SEARCHRESULTS;

  constructor(
    private globals: Globals,
  ) { }

  getSearchResult(qry) {

    console.log("this.searchResults:::",this.searchResults);

    qry = qry.toLowerCase().trim();

    for (var i = 0; i < this.searchResults.length; i++) {

      if (this.searchResults[i].queries.indexOf(qry) >= 0) {
        this.globals.selectedSearchResults = SEARCHRESULTS[i];
        return SEARCHRESULTS[i];
      }

      if(i === (this.searchResults.length-1)){
        this.globals.selectedSearchResults = SEARCHRESULTS[0];
        return SEARCHRESULTS[0];
      }

    }

  }

}
