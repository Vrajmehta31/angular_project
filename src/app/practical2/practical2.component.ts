import { Component } from '@angular/core';
import { Student } from '../../student';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-practical2',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './practical2.component.html',
  styleUrl: './practical2.component.css',
})
export class Practical2Component {
  student: Student = {
    id: 1258,
    name: 'Anas',
    course: 'MCA',
    marks: 94,
  };
}
