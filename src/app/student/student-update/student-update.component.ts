import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent {
  shown:Boolean = false;
  @Input()student:Student = new Student(0,"",0);
  @Output() onStudentUpdated:EventEmitter<Student>=new EventEmitter<Student>();
  update(){
    this.onStudentUpdated.emit(this.student);
    this.shown = false;
  }
  show(){
  // show(std:Student){
    // this.student.id = std.id;
    // this.student.name = std.name;
    // this.student.age = std.age;
    this.shown = true;
  }
}
