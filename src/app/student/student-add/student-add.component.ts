import { Component, EventEmitter,Output } from '@angular/core';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent {
  std:Student = new Student(0,"",0);
  @Output() onStudentAdded:EventEmitter<Student>=new EventEmitter<Student>();
  add(){
    this.onStudentAdded.emit(this.std);
    this.std = new Student(0,"",0);
  }
}


