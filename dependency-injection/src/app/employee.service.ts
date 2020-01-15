import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url:string = "/assets/data/employee.json";

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]>{
    // return [
    //   {"id":1,"name":"darshana","age":22},
    //   {"id":2,"name":"pubudu","age":23},
    //   {"id":3,"name":"bandara","age":24},
    //   {"id":4,"name":"senevirathna","age":25}
    // ];

    return this.http.get<IEmployee[]>(this._url);
  }

}
