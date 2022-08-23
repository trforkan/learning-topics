import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {

  @Output() intervalFired = new EventEmitter<number>();

  interval: any;
  value = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.value + 1);
      this.value++;
    }, 1000);
  }

  onEndGame() {
    clearInterval(this.interval);
  }

}
