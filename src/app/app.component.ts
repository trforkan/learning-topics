import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-udemy';
  number = 10;

  public childData : number | null = null;

  customData = [
    {
      name: 'forkan',
      age: 25,
      gender: 'male'
    },
    {
      name: 'trforkan',
      age: 24,
      gender: 'male'
    },
    {
      name: 'Prianka',
      age: 23,
      gender: 'female'
    }
  ];

  ngOnInit(){
    console.log("childData = ",this.childData);
  }

}
