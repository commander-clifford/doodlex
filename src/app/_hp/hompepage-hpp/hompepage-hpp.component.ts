import { Component, Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hompepage-hpp',
  templateUrl: './hompepage-hpp.component.html',
  styleUrls: ['./hompepage-hpp.component.scss'],
  encapsulation: ViewEncapsulation.None, // fixes dynamic content/styles issue
})

export class HompepageHppComponent {

  @Input() doodle: any;

}
