import { Component, OnInit } from '@angular/core';
import { bindCallback } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-udemy';
  number = 10;


  ngOnInit() {
    // this.processOrder("forkan");

    this.takeOrder('Forkan', (customer:any)=>{
      this.processOrder(customer, (customer:any)=>{
        this.completeOrder(customer);
      });
    });
  }


  takeOrder = (customer: any, callback:any) => {
    console.log(`taking order for ${customer}`);
    callback(customer);
  };

  completeOrder = (customer: any) => {
    console.log(`order completed for ${customer}`);
  };


  processOrder = (customer:any, callback:any) => {
    console.log(`processing order for ${customer}`);

    setTimeout(() => {
      console.log("cooking complete");
      console.log(`order processed for ${customer}`);
      callback(customer);
    },3000);

    // callback()

  };



}
