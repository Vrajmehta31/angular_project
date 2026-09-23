import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-practical8',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './practical8.component.html',
  styleUrl: './practical8.component.css',
})
export class Practical8Component {
  showList = true;

  students = [
    { id: 1, name: 'Anas Shaikh', course: 'BCA', marks: 91 },
    { id: 2, name: 'Rahul Patel', course: 'BCA', marks: 88 },
    { id: 3, name: 'Priya Sharma', course: 'MCA', marks: 95 },
    { id: 4, name: 'Amit Verma', course: 'BCA', marks: 85 },
  ];
}
