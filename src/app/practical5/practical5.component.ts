import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-practical5',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './practical5.component.html',
  styleUrl: './practical5.component.css',
})
export class Practical5Component {
  totalStudents = 250;
  totalCourses = 12;
}
