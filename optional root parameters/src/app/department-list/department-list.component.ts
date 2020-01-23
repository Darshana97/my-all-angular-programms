import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>
      department-list works!
    </h3>

    <ul>
      <li (click)="onSelect(department)" *ngFor="let department of departments"> {{depatment.id}}.{{department.name}} </li>
    </ul>


  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  departments = [
    {"id":1, "name": "SE"},
    {"id":2, "name": "Chem"},
    {"id":3, "name": "Phy"},
    {"id":4, "name": "Math"}
  ]

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onSelect(department){

    this.router.navigate(['/departments'], department.id);

  }

}
