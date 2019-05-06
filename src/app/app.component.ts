import { Component } from '@angular/core';
import { routerTransition } from './animations/router.animations';

@Component({
  selector: 'app-root',
  animations: [ routerTransition ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  controlPanelOpen:boolean = false;

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

}
