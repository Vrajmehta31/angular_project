import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-practical10',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './practical10.component.html',
  styleUrl: './practical10.component.css',
})
export class Practical10Component {
  user = {
    name: '',
    address: '',
    phone: '',
  };
}
