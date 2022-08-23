import { customData } from './../../model/models';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit, AfterViewInit {

  @Input('customDataAlias') public customData: customData[]  = [];

  @Output() public outputValue = new EventEmitter<number>();

  @ViewChild('nameRef', { static: true }) nameElementRef!: ElementRef;


  ngAfterViewInit() {
    // this.nameElementRef?.nativeElement.focus();
    console.log("viewChild = ",this.nameElementRef.nativeElement.value);
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.customData);
  }

  deleteItem(value: number = 10) {
    this.outputValue.emit(value);
    // console.log(this.outputValue);
  }

}
