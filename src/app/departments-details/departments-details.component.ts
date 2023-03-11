import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(public departmentService:DepartmentService,public link:ActivatedRoute,public router:Router){
  }
  // ngOnChanges(): void {
  //   this.departmentDetails=this.departmentService.getDepartment(this.id);
  // }
  ngOnInit(): void {
    console.log(this.link.snapshot);
    this.departmentDetails=this.departmentService.getDepartment(this.link.snapshot.params['id']);
    console.log(this.departmentDetails);
    console.log(JSON.stringify( this.departmentDetails));
  }
  back(){
    this.router.navigate(['/departments']);
  }
}
