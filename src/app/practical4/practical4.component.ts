import { Component } from '@angular/core';
import { Course } from '../../course';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-practical4',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './practical4.component.html',
  styleUrl: './practical4.component.css',
})
export class Practical4Component {
  courses = Object.values(Course);
}
