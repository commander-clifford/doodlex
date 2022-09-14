import { Component, OnInit } from '@angular/core';
import { Globals } from '../../globals';
import { DOODLETYPES } from '../../doodles/doodletypes';

@Component({
  selector: 'app-super',
  templateUrl: './super.component.html',
  styleUrls: ['./super.component.scss']
})
export class SuperComponent implements OnInit {

  public doodletypes = DOODLETYPES;
  
  constructor(
    public globals: Globals,
  ) { }

  ngOnInit() {
  }

}
