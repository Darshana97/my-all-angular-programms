import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = "Codevolution";
  public message = "Welcome to Codevolution";
  public person = {
    "firstName":"Darshana",
    "lastName":"Senevirathna"
  }

  public date = new Date;

  constructor() { }

  ngOnInit() {
  }

}
