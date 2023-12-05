import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmpApiService {

  constructor(private _http:HttpClient) { 


  }

  //create post 

  addEmp(data:any){
    return this._http.post<any>("http://localhost:3000/employee",data).pipe(map((res:any)=>{
      return res;
    }))
  }

  

}
