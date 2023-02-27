import { Component } from '@angular/core';

@Component({
  //'app-root' => <app-root></app-root>
  //[app-root] => <div app-root></div>
  //.app-root => <div class="app-root"></div>
  selector: '[app-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
}
