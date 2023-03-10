import { Component,OnInit } from '@angular/core';
import { Department } from '../_models/department';
import { DepartmentService } from '../_services/department.service';

@Component({
  selector: 'app-departments-list',
  templateUrl: './departments-list.component.html',
  // styleUrls: ['./departments-list.component.css']
})
export class DepartmentsListComponent implements OnInit {
  departments:Department[]=[];
  department:Department=new Department(0,'');
  DetailsId=0;
  constructor(public departmentService:DepartmentService){
  }
  ngOnInit(): void {
    this.departments=this.departmentService.getAllDepartments();
  }
 add(){
    // this.departments.push(this.department);
    this.departmentService.addDepartment(this.department);
    this.department=new Department(0,'');
 }
 delete(id:number){
  this.departmentService.deleteDepartment(id)
 }

}
