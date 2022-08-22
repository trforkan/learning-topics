import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-udemy';
  number = 10;

  customData = {
    name: 'forkan',
    age: 25,
    gender: 'male'
  };

}
