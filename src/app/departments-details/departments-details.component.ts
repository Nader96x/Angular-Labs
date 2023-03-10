import { Component, Input } from '@angular/core';
import { Department } from '../_models/department';
import { DepartmentService } from '../_services/department.service';

@Component({
  selector: 'app-departments-details',
  templateUrl: './departments-details.component.html',
  // styleUrls: ['./departments-details.component.css']
})
export class DepartmentsDetailsComponent {
  departmentDetails:Department|undefined=undefined;
  @Input() id=-1;
  constructor(public departmentService:DepartmentService){
  }
  ngOnChanges(): void {
    this.departmentDetails=this.departmentService.getDepartment(this.id);
  }
}
