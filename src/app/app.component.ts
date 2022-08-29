import { Component, OnInit } from '@angular/core';
import { ResolveStart } from '@angular/router';
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
    // this.callbackHell();

    console.log("promise:");

    this.promise
      .then(this.myfunc)

      .then((result) => {
        console.log(result);
      })

      .catch((err) => {
        console.log(err);
      });


  }


  myfunc = (data:any) => {

    const str = `His name is ${data.name} and email address is ${data.email}`;
    return Promise.resolve(str);

  }

  promise = new Promise((resolve,reject) => {
    if(this.number>=10){
      const data = {
        name: 'Forkan',
        email: 'trforkan@gmail.com'
      }
      resolve(data);
    }

    else {
      reject(new Error("data undefined!!!!!!!"));
    }
  })


  // promise = new Promise((resolve,reject) => {
  //    if(this.number<10) {
  //     const meetingDetails = {
  //       name: 'Angular Learning',
  //       platform: 'Google Meet',
  //       time: "10:00 AM"
  //     }
  //     resolve(meetingDetails);
  //    }
  //    else {
  //     reject(new Error('Meeting already scheduled!!!!!!!!'));
  //    }
  // });


  callbackHell() {
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
