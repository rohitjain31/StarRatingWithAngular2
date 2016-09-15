import { Component } from '@angular/core';
import {RatingComponent} from './rating/rating.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives:[RatingComponent]
})
export class AppComponent {
  title = 'Star Rating App';
}