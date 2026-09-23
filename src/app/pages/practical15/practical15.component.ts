import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentService, Student } from '../../services/student.service';

@Component({
  selector: 'app-practical15',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './practical15.component.html',
  styleUrls: ['./practical15.component.css']
})
export class Practical15Component {
  students: Student[];

  constructor(private studentService: StudentService) {
    this.students = this.studentService.getAllStudents();
  }
}