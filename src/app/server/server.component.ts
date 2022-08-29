import { Observable } from 'rxjs';
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


  ara = [
    {
      name: "forkan",
      email: "trforkan@gmail.com",
      gender :"male",
      age: 26
    },
    {
      name: "Prianka",
      email: "priya@gmail.com",
      gender: "female",
      age: 24
    },
    {
      name: "PriyaRani",
      email: "priyarani@gmail.com",
      gender: "female",
      age: 24
    }
  ]

  constructor() { }

  ngOnInit(): void {

    console.log(this.ara);


    const flag_Every = this.ara.every( p => p.age > 24);  //every
    console.log("flag_Every = ",flag_Every);

    const initial_ara = {
        name: "",
        email: "",
        gender: "",
        age: 0
      };


    const mapping = this.ara.map(p => p.name).join('|');
    console.log("map = ",mapping);


    const ara_filter = this.ara.filter( p => p.age <= 25 );  // filter
    console.log("filter = ", ara_filter);

    const ara_find = this.ara.find(p => p.age<=24);  // find (retuns the first find data from array that matches the condition)
    console.log("find = ",ara_find);


    const ara_index = this.ara.findIndex(p => p.age<=26); //find index
    console.log("find_index = ",ara_index);


    const poped = this.ara.pop();
    console.log("pop = " , poped);


    const ara_filled = this.ara.fill(initial_ara,1,3);  //fill
    console.log("fill = ",ara_filled);

      const promise = new Promise((resolve) => {
        setTimeout(() => {
          resolve("Primise Working");
        },1000)
      })

      // promise.then(res => console.log(res));
      console.log(promise);

      const  observable = new Observable(res => {
        setTimeout(() => {
          res.next('Observable  working')
        },1000)
      });
      // observable.subscribe(res => console.log(res));
      console.log(observable)

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
