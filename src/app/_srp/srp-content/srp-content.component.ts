import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Globals } from '../../globals';
import { SearchResultsService } from '../../search-results/search-results.service';
import { SearchResult } from '../../search-results/search-result';
import { DOODLETYPES } from '../../doodles/doodletypes';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-srp-content',
  templateUrl: './srp-content.component.html',
  styleUrls: ['./srp-content.component.scss'],
  encapsulation: ViewEncapsulation.None, // fixes dynamic content/styles issue
})

export class SrpContentComponent implements OnInit {

  i;
  theme;
  archive;
  archiveUrls: string[] = null;
  eehTheme;
  eehStep;
  searchResults: SearchResult[];
  private selectedSearchResults: object;
  private showTopStories: boolean;
  private showKnowledgePanel: boolean;
  private showSearchSuggestions: boolean;
  private selectedResult;
  private searchQuery: string;
  private doodletypes = DOODLETYPES;

  constructor(
    private globals: Globals,
    private route: ActivatedRoute,
    private searchResultsService: SearchResultsService,
  ) {

  }

  ngOnInit() {

    // this.theme = this.globals.theme;
    // console.log("SRP-CONTENT this.theme",this.theme);

    this.searchQuery = this.route.snapshot.paramMap.get('query');
    console.log("SRP-CONTENT this.searchQuery",this.searchQuery);

    console.log("SRP-CONTENT this.globals.selectedSearchResults",this.globals.selectedSearchResults);

    this.globals.searchQuery = this.searchQuery;

    this.getSearchResult(this.searchQuery); // sets this.globals.selectedSearchResults

    this.selectedResult = this.globals.selectedSearchResults;

    // console.log("SRP-CONTENT this.selectedResult",this.selectedResult);


    this.archive = this.selectedResult.coorDoodleId && this.doodletypes[this.selectedResult.coorDoodleId].archive ? this.doodletypes[this.selectedResult.coorDoodleId].archive : null;

    console.log('this.archive',this.archive);

    if(this.archive){

      this.archiveUrls = [];

      console.log('--archive',this.archive);

      for( this.i = 0; this.i < this.archive.length; this.i++){

        this.archiveUrls.push(this.archive[this.i].url);

      }

    }




    // Does this Search result have an egg?
    if(this.globals.selectedSearchResults.egg){

      if(!this.route.snapshot.paramMap.get('eehTheme')){
        // if(this.globals.selectedSearchResults.egg){
          this.eehTheme = this.globals.selectedSearchResults.egg.class;
          this.globals.eehTheme = this.eehTheme;

          console.log('this.globals.eehTheme',this.globals.eehTheme);
        // }


        // this.eehStep = this.selectedResult.egg.class;
        // this.globals.eehStep = this.eehStep; console.log('this.globals.eehStep',this.globals.eehStep);

      } else {

        this.eehTheme = this.route.snapshot.paramMap.get('eehTheme');
        this.globals.eehTheme = this.eehTheme; console.log('this.globals.eehTheme',this.globals.eehTheme);

        this.eehStep = this.route.snapshot.paramMap.get('eehStep');
        this.globals.eehStep = this.eehStep; console.log('this.globals.eehStep',this.globals.eehStep);

        // if(this.route.snapshot.paramMap.get('eehTheme') === 'easter-trivia'){
        //   let theme = this.route.snapshot.paramMap.get('eehTheme');
        //   this.globals.theme = 'easter';
        // }

      }

    }


  }

  private getSearchResult(qry): void {
    this.selectedSearchResults = this.searchResultsService.getSearchResult(qry);
  }

}
