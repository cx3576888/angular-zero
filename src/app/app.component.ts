import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  url = 'http://blog.miniasp.com/';
  imgurl = '/assets/images/logo.png';
  characters = 0;
  constructor() {
  }
  changeTitle(altKey: boolean) {
    if (altKey) {
      this.title  = 'The Will Will Web';
    }
  }
  onKey($event: KeyboardEvent) {
    this.characters = $event.target.value.length;
    if ($event.keyCode === 27) {
      $event.target.value = '';
      this.characters = 0;
    }
  }
}
