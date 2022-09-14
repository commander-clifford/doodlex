import { Component, OnInit, Input } from '@angular/core';
import { Globals } from '../../globals';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AppStateService } from '../../app-state.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})

export class SearchBarComponent implements OnInit {

  public searchQuery: string;
  public values: string;
  public isMobileResolution: boolean;

  @Input() page: string;
  @Input() class: string;

  constructor(
    public globals: Globals,
    public router: Router,
    public dialog: MatDialog,
    public route: ActivatedRoute,
    public appStateService: AppStateService,
  ) {

    route.url.subscribe(() => {
      this.searchQuery = route.snapshot.firstChild ? route.snapshot.firstChild.url[0].path.trim() : null;
      console.log("**SRP init searchQuery: ",this.searchQuery);
    });

  }

  ngOnInit() {

  }

  public runUpdateQuery(event: any): void {

    if(event.code == 'Enter' || event.code == 'NumpadEnter'){
      this.checkResults();
    }

    this.globals.searchQuery = this.searchQuery.trim();

    console.log(event.code);
    this.values += event.target.value + ' | ';
    console.log('this.values',this.values);

  }

  public checkResults(): void {
    if(this.globals.searchQuery){
      console.log('search for:',this.globals.searchQuery.trim());
      this.router.navigate(["/results/"+this.globals.searchQuery.trim()]);
    } else {
      console.log("search for: Not all those who 'Search' are lost!!");
      this.router.navigate(["/results/Not all those who 'Google search' are lost"]);
    }
  }

}
