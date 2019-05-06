import { Component, OnInit } from '@angular/core';

import { SEARCHRESULTS } from '../../search-results/search-results';

import { Globals } from '../../globals';

@Component({
  selector: 'app-srp-top-stories',
  templateUrl: './srp-top-stories.component.html',
  styleUrls: ['./srp-top-stories.component.scss']
})

export class SrpTopStoriesComponent implements OnInit {

  private searchResults = SEARCHRESULTS;
  private selectedResult: object;

  constructor(
    private globals: Globals
  ) {
    console.log('SrpTopStoriesComponent:selectedSearchResults',this.globals.selectedSearchResults);
    this.selectedResult = this.globals.selectedSearchResults;
  }

  ngOnInit() {}

}
