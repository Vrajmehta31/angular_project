import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Student {
  name: string;
  marks: number;
}

@Component({
  selector: 'app-practical14',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './practical14.component.html',
  styleUrls: ['./practical14.component.css']
})
export class Practical14Component {
  students: Student[] = [
    { name: 'Sonal', marks: 78 },
    { name: 'Amit', marks: 32 },
    { name: 'Vraj', marks: 55 },
    { name: 'Riya', marks: 20 }
  ];
}