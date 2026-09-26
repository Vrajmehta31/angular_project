import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-practical1',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './practical1.component.html',
  styleUrl: './practical1.component.css',
})
export class Practical1Component {
  user = {
    name: 'Amit Shah',
    email: 'virat@example.com',
    age: 21,
    photo: '', // left blank — no image set
  };
}