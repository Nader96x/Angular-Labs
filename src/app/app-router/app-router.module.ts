import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes,RouterModule } from '@angular/router';
import { DepartmentsListComponent } from '../departments-list/departments-list.component';
import { DepartmentsDetailsComponent } from '../departments-details/departments-details.component';
import { DepartmentUpdateComponent } from '../department-update/department-update.component';
import { StudentListComponent } from '../student/student-list/student-list.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes: Routes = [
  {path: 'departments', component: DepartmentsListComponent},
  {path: 'departments/:id', component: DepartmentsDetailsComponent},
  {path: 'departments/:id/update', component: DepartmentUpdateComponent},
  {path: 'students', component: StudentListComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'contact', component: ContactUsComponent},
  // {path: 'students/add', component: StudentAddComponent},
  // {path: 'students/:id/update', component: StudentUpdateComponent},
  // {path: 'students/:id/delete', component: StudentDeleteComponent},
  {path: '', redirectTo: '/departments', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRouterModule { }
