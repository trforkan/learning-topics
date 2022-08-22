import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Component, OnInit } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {

  bgColor = 'white';
  txtColor = 'black';

  constructor() { }

  ngOnInit(): void {
  }


  display(event: Event) {
    console.log((<HTMLInputElement>event.target).value);
  }

  displayVal(event: any) {
    console.log(event);
  }

  colorToggle(event: MatSlideToggleChange) {
    if(event.checked==true) this.bgColor = "aqua";
    else this.bgColor = "white";
  }

  colorToggle2(event: MatButtonToggleChange) {
    this.bgColor=event.value;
  }

}
