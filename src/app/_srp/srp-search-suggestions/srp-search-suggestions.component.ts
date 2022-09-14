import { Component, OnInit } from '@angular/core';
import { SEARCHRESULTS } from '../../search-results/search-results';
import { Globals } from '../../globals';
import {
  Draggable,
  TweenMax,
  TweenLite,
  TimelineMax,
  TimelineLite,
  Linear,
  Power1,
  Power2,
  Power3,
  Power4,
  Elastic
} from "gsap/all";

@Component({
  selector: 'app-srp-search-suggestions',
  templateUrl: './srp-search-suggestions.component.html',
  styleUrls: ['./srp-search-suggestions.component.scss']
})

export class SrpSearchSuggestionsComponent implements OnInit {

  searchResults = SEARCHRESULTS;
  selectedResult: any;

  constructor(
    public globals: Globals
  ) {
    console.log('SRP-SUG this.globals.selectedSearchResults',this.globals.selectedSearchResults);
    this.selectedResult = this.globals.selectedSearchResults;
  }

  ngOnInit() {


  }

}
