import { customData } from './../../model/models';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  @Input() customData: customData | null = null;

  constructor() { }

  ngOnInit(): void {
    console.log(this.customData);
  }

}
