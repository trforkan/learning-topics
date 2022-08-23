import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-udemy-course';
  gameIntervalValue = 0;


  oddNumber: number[] = [];
  evenNumber: number[] = [];

  onIntervalFired(event: number) {
    console.log(this.oddNumber);
    this.gameIntervalValue=event;
    if(event%2==0)this.evenNumber.push(event);
    else this.oddNumber.push(event);
  }

}
