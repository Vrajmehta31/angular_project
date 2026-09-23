// task5.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Student {
  studId: number; name: string; isActive: boolean; gender: string; state: string;
}

@Component({
  selector: 'app-ngclass-task5',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task5.component.html',
  styleUrl: './task5.component.css'
})
export class NgclassTask5Component {
  students: Student[] = [
    { studId: 1, name: 'Chetan', isActive: true, gender: 'Male', state: 'MH' },
    { studId: 2, name: 'Punesh', isActive: true, gender: 'Male', state: 'MP' },
    { studId: 3, name: 'Sahiti', isActive: true, gender: 'Female', state: 'CG' },
    { studId: 4, name: 'Johar', isActive: true, gender: 'Male', state: 'DL' },
    { studId: 5, name: 'Aditi', isActive: true, gender: 'Female', state: 'PB' }
  ];

  selectedStudId: number | null = null;

  selectRow(studId: number) {
    this.selectedStudId = studId; 
  }
}