import { Component, OnInit, Input } from '@angular/core';
import { Globals } from '../../globals';


@Component({
  selector: 'app-homepage-logo',
  templateUrl: './homepage-logo.component.html',
  styleUrls: ['./homepage-logo.component.scss']
})

export class HomepageLogoComponent implements OnInit {

  private query;

  @Input() logo: object;
  @Input() searchQuery: string;
  @Input() doodle: string;

  constructor(private globals: Globals) {}

  ngOnInit() {}

}
