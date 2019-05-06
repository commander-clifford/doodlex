import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Globals } from '../../globals';
import { DOODLETYPES } from '../../doodles/doodletypes';

@Component({
  selector: 'app-srp-logo',
  templateUrl: './srp-logo.component.html',
  styleUrls: ['./srp-logo.component.scss']
})

export class SrpLogoComponent implements OnInit {

  @Input() logo: object;

  private doodletypes = DOODLETYPES;

  constructor(
    private router: Router,
    private globals: Globals)
  { }

  ngOnInit() {
    this.logo = this.doodletypes[this.globals.activeDoodleID].logo;
    console.log("SRP-LOGO ngOnInit",this.logo);
  }

  private determineRouterLink(): void {
    this.router.navigate(["/search/"]);
  }

}
