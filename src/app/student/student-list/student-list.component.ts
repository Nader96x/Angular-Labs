import { Component } from '@angular/core';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  students:Student[] = [
    new Student(10,"nader",26),
    new Student(20,"ahmed",25),
    new Student(30,"mohamed",24),
    new Student(40,"ali",23),
    new Student(50,"sara",22),
  ]
  std:Student=new Student(0,"",0);
  detailsflag=false;
  stddetails:Student=new Student(0,"",0);
  show(id:number){
    this.stddetails=this.students.find(s=>s.id==id)!;
    this.detailsflag=true;
  }
  add(student:Student){
    this.students.push(student);
  }
  update(student:Student){
    let i=this.students.findIndex(s=>s.id==student.id);
    this.students[i].id=student.id;
    this.students[i].name=student.name;
    this.students[i].age=student.age;
    console.log("list-update",this.students)
  }
  delete(id:number){
    console.log("list-delete",id)
    this.students=this.students.filter(s=>s.id!=id);
  }
}
