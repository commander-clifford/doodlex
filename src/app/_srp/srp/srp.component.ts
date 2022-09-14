import { Component, OnInit, HostListener } from '@angular/core';
import { Globals } from '../../globals';
import { DOODLETYPES } from '../../doodles/doodletypes';
import { DoodleService } from '../../doodles/doodle.service';

import { ActivatedRoute, Router } from '@angular/router';
import { Animations } from '../../animations/router.animations';
import { SearchResultsService } from '../../search-results/search-results.service';
import { SearchResult } from '../../search-results/search-result';
import { AppStateService } from '../../app-state.service';

@Component({
  selector: 'app-srp',
  animations: [ Animations.routerTransition ],
  templateUrl: './srp.component.html',
  styleUrls: ['./srp.component.scss'],
  host: {'(window:resize)': 'onResize($event)'}
})

export class SrpComponent implements OnInit {

  public doodletypes = DOODLETYPES;

  theme;
  themeClass;
  doodle;
  eehTheme;
  eehStep;
  searchResults: SearchResult[];
  // selectedSearchResults: SearchResult;
  public selectedSearchResults: object;
  public showTopStories: boolean;
  public showKnowledgePanel: boolean;
  public showSearchSuggestions: boolean;
  public searchQuery: string;
  public isMobileResolution: boolean;

  constructor(
    public doodleService: DoodleService,
    public appStateService: AppStateService,
    public globals: Globals,
    public route: ActivatedRoute,
    public router: Router,
    public searchResultsService: SearchResultsService,
  ) {

    this.doodleService.getADI(this.route);


    this.isMobileResolution = appStateService.getIsMobileResolution();
    this.globals.isMobileResolution = this.isMobileResolution;

    route.url.subscribe(() => {
      this.searchQuery = route.snapshot.firstChild.url[0].path.trim();
      console.log("**SRP init searchQuery: ",this.searchQuery);
    });

  }

  ngOnInit() {
    this.theme = this.doodletypes[this.globals.activeDoodleID].triggers[0];
    this.themeClass = this.theme.replace(/ /g,'-');
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

  onResize(event) {
    this.isMobileResolution = this.appStateService.getIsMobileResolution();
    this.globals.isMobileResolution = this.isMobileResolution;
  }



}
