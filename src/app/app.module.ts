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

import { CoreModule } from './core/core.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {CalendarModule} from 'primeng/calendar';
import {ChipsModule} from 'primeng/chips';
import {ColorPickerModule} from 'primeng/colorpicker';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ChartModule} from 'primeng/chart';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AppRouterModule } from './app-router/app-router.module';






@NgModule({
  declarations: [
    AppComponent,
    DepartmentsListComponent,
    DepartmentsDetailsComponent,
    StudentAddComponent,
    StudentDeleteComponent,
    StudentListComponent,
    DepartmentUpdateComponent,
    StudentUpdateComponent,
    NotFoundComponent,
    AboutUsComponent,
    ContactUsComponent,

  ],
  imports: [

    MatSlideToggleModule,

    MessageModule,MessagesModule,
    BrowserAnimationsModule,ColorPickerModule,ChartModule,
    BrowserModule,FormsModule,CoreModule,CalendarModule,ChipsModule,
    AppRouterModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
