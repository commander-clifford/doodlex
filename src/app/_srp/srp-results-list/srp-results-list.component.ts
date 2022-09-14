import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { SEARCHRESULTS } from '../../search-results/search-results';
import { Globals } from '../../globals';

@Component({
  selector: 'app-srp-results-list',
  templateUrl: './srp-results-list.component.html',
  styleUrls: ['./srp-results-list.component.scss']
})
export class SrpResultsListComponent implements OnInit {

  selectedResult: any;

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public location: Location,
    public globals: Globals
  ) {
    console.log('this.globals.selectedSearchResults',this.globals.selectedSearchResults);
    this.selectedResult = this.globals.selectedSearchResults;
  }

  ngOnInit() {}

}
