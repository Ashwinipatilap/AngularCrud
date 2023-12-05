import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmpApiService } from '../shared/emp-api.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  showadd!:boolean;
  showupdate!:boolean;
  employeeForm!:FormGroup;
  constructor(private fb:FormBuilder,private empservice:EmpApiService) { }

  ngOnInit(): void {

    this.employeeForm=this.fb.group({
      name:[],
      email:[],
      contact:[],
      city:[]
    })
  }

  add(){
    this.showadd=true;
    this.showupdate=false;


  }

  update(){
    this.showadd=false;
    this.showupdate=true;

  }

  employeeAdd(){
    this.empservice.addEmp(this.employeeForm.value).subscribe(data=>{
      console.log(data);
    })
  }




}
