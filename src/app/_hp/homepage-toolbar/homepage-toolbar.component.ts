import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../messages/message.service';
import { Globals } from '../../globals';

@Component({
  selector: 'app-homepage-toolbar',
  templateUrl: './homepage-toolbar.component.html',
  styleUrls: ['./homepage-toolbar.component.scss']
})

export class HomepageToolbarComponent implements OnInit {

  constructor(
    private messageService: MessageService,
    private globals: Globals
  ) {}

  ngOnInit() {

  }

  prototypeClick(message): void {
    this.messageService.testAlert(message);
  }

}
