import { Component, Output, EventEmitter, HostListener, Input, OnInit } from '@angular/core';
import { Globals } from '../../globals';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ComposeService } from '../../_gm/compose/compose.service';
import { ShareService } from '../../_gm/share/share.service';
import { DoodleSheetService } from '../../doodles/doodle-sheet/doodle-sheet.service';

@Component({
  selector: 'app-doodle',
  templateUrl: './doodle.component.html',
  styleUrls: ['./doodle.component.scss']
})

export class DoodleComponent implements OnInit {

  @Input() doodleType: any;
  @Input() client: string;

  constructor(
    public globals: Globals,
    public router: Router,
    public composeService: ComposeService,
    public shareService: ShareService,
    public doodleSheetService: DoodleSheetService,
  ) { }

  @HostListener('click')
  click() {



    // if(this.client == 'gmail'){
    //   // this.shareService.open();
    //   this.doodleSheetService.open();
    // } else {
        console.log('doodle click in',this.client);
    // }
  }

  ngOnInit() {}

}
