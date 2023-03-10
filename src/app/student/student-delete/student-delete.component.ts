import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css']
})
export class StudentDeleteComponent {
  // std:Student = new Student(0,"",0);
  @Output() onDelete:EventEmitter<number>=new EventEmitter<number>();
  // @Output() onDelete:EventEmitter<number>=new EventEmitter<number>();
  deleteStudent(){
    // console.log("deleteStudent",this.std.id);
    this.onDelete.emit(1);
  }
  
}
