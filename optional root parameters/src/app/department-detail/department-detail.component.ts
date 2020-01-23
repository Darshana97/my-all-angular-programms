import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>
      You Select Department with Id {{departmentId}}
    </h3>
    <a (click)="goPrevious()">Previous</a>
    <a (click)="goNext()">Next</a>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;

  constructor(private route:ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.route.paramMap.subscribe((parms:ParamMap) =>{

      let id = parseInt(parms.get('id'));
      this.departmentId = id;


    })
  }

  goPrevious(){

    let previousId = this.departmentId - 1;



  }

  goNext(){

    let nextId = this.departmentId + 1;
    

  }

}
