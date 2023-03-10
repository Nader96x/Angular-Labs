import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DepartmentsListComponent } from './departments-list/departments-list.component';
import { DepartmentsDetailsComponent } from './departments-details/departments-details.component';
import { FormsModule } from '@angular/forms';
import { StudentAddComponent } from './student/student-add/student-add.component';
import { StudentDeleteComponent } from './student/student-delete/student-delete.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { DepartmentUpdateComponent } from './department-update/department-update.component';
import { StudentUpdateComponent } from './student/student-update/student-update.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentsListComponent,
    DepartmentsDetailsComponent,
    StudentAddComponent,
    StudentDeleteComponent,
    StudentListComponent,
    DepartmentUpdateComponent,
    StudentUpdateComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
