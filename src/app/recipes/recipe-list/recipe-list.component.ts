import { customData } from './../../model/models';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  @Input('customDataAlias') public customData: customData[]  = [];

  @Output() public outputValue = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.customData);
  }

  deleteItem(value: number = 10) {
    this.outputValue.emit(value);
    // console.log(this.outputValue);
  }

}
