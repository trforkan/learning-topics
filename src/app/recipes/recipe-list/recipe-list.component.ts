import { customData } from './../../model/models';
import { FormControl, FormGroup } from '@angular/forms';
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent
  implements
    OnInit,
    AfterViewInit,
    AfterViewChecked,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    OnDestroy
{
  @Input('customDataAlias') public customData: customData[] = [];

  @Output() public outputValue = new EventEmitter<number>();

  @ViewChild('nameRef', { static: true }) nameElementRef!: ElementRef;

  loginInfo: { name: string; password: string }[] = [];

  loginInput: FormGroup = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
  });

  constructor() {
    console.log('Constructor is called');
  }

  ngOnInit(): void {
    console.log('ngOnInit is called');
  }

  ngAfterViewInit() {
    // this.nameElementRef?.nativeElement.focus();
    console.log('viewChild = ', this.nameElementRef.nativeElement.value);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges happened');
    console.log(changes);
  }

  ngDoCheck() {
    console.log('ngDoCheck is called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit is Called');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked is called');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChanged is called');
  }

  ngOnDestroy(): void {
    console.log("nghOnDestroy is called");
  }

  deleteItem(value: number = 10) {
    // this.loginInfo.splice(1,1);
    this.customData.splice(0,1);
    console.log(this.customData);
    this.outputValue.emit(value);
    // console.log(this.outputValue);
  }

  dataInsert() {
    this.loginInfo.push(this.loginInput.value);
    console.log(this.loginInfo);
  }

  changekor() {
    this.customData[0].age = 50;
  }
}
