import { Component, OnInit } from '@angular/core';

import { MessageService } from '../../messages/message.service';

@Component({
  selector: 'app-homepage-footer',
  templateUrl: './homepage-footer.component.html',
  styleUrls: ['./homepage-footer.component.scss']
})
export class HomepageFooterComponent implements OnInit {

  constructor(public messageService: MessageService) { }

    ngOnInit() {
    }

    prototypeClick(message): void {
      this.messageService.testAlert(message);
    }

}
