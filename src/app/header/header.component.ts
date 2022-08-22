import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // @Input() customData: {
  //   name: string | null ,
  //   age: number | null ,
  //   gender: string | null
  // };

  constructor() { }

  ngOnInit(): void {
  }

}
