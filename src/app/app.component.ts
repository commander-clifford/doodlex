import { Component } from '@angular/core';
import { Animations } from './animations/router.animations';

@Component({
  selector: 'app-root',
  animations: [ Animations.routerTransition ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  controlPanelOpen:boolean = false;

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

}
