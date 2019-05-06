import { Component, OnInit } from '@angular/core';
import { Globals } from '../../globals';

@Component({
  selector: 'app-srp-abstract',
  templateUrl: './srp-abstract.component.html',
  styleUrls: ['./srp-abstract.component.scss']
})
export class SrpAbstractComponent implements OnInit {

  selectedResult: object;

  constructor(
    private globals: Globals
  ) {
    console.log('SRP-SUG this.globals.selectedSearchResults',this.globals.selectedSearchResults);
    this.selectedResult = this.globals.selectedSearchResults;
  }

  ngOnInit() {}

}
