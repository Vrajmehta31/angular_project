import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Student { name: string; age: number; attendance: number; gender: string; isIndian: boolean; }

@Component({
  selector: 'app-task7',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task7.component.html',
  styleUrl: './task7.component.css'
})
export class Task7Component {
  students: Student[] = [
    { name: 'John Doe', age: 22, attendance: 80, gender: 'M', isIndian: true },
    { name: 'Jane Smith', age: 24, attendance: 60, gender: 'F', isIndian: false },
    { name: 'Amit Patel', age: 21, attendance: 70, gender: 'M', isIndian: true },
    { name: 'Linda Brown', age: 51, attendance: 90, gender: 'F', isIndian: false },
    { name: 'Ravi Singh', age: 23, attendance: 85, gender: 'M', isIndian: true }
  ];
  ageDisplay(age: number): string { return age < 50 ? 'Low' : age.toString(); }
  attendanceDisplay(a: number): string { return `${a}% - ${a < 75 ? 'Low' : 'High'}`; }
}