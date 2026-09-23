import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-practical21',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './practical21.component.html',
  styleUrls: ['./practical21.component.css']
})
export class Practical21Component {
  name = '';
  email = '';
  gender = '';
  course = '';
  submitted = false;

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.submitted = true;
      console.log('Admission Form Data:', form.value);
    }
  }
}