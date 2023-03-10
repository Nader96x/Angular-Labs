import { Injectable } from '@angular/core';
import { Department } from '../_models/department';
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private departments:Department[]=[
    new Department(10,'Open Source'),
    new Department(20,'Web Development'),
    new Department(30,'IOT'),
    new Department(40,'Data Science'),
  ];

  getAllDepartments() {
    return this.departments;
  }

  getDepartment(id:number):Department|undefined {
    return this.departments.find(d => d.id === id);
  }
  addDepartment(department:Department){
    this.departments.push(new Department(department.id,department.name));
  }
  updateDepartment(department:Department){
    let i=this.departments.findIndex(d=>d.id===department.id);
    this.departments[i].id = department.id
    this.departments[i].name = department.name;
  }
  deleteDepartment(id:number){
    let i=this.departments.findIndex(d=>d.id===id);
    this.departments.splice(i,1);
  }
}
