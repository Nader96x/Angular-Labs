import { Component, Input } from '@angular/core';
import { Department } from '../_models/department';
import { DepartmentService } from '../_services/department.service';

@Component({
  selector: 'app-department-update',
  templateUrl: './department-update.component.html',
  styleUrls: ['./department-update.component.css']
})
export class DepartmentUpdateComponent {
  @Input() dep:Department = new Department(0,'');
  shown:Boolean = false;
  constructor(public departmentService:DepartmentService) { }
  show(dep:Department){
    this.dep.id = dep.id;
    this.dep.name = dep.name;
    this.shown = true;
  }
  save(){
    this.departmentService.updateDepartment(this.dep);
    this.shown = false;
  }
}
