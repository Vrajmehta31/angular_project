import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ngif-task4',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ngif-task4.component.html',
  styleUrl: './ngif-task4.component.css'
})
export class NgifTask4Component {
  firstName: string = '';
  lastName: string = '';
  state: string = '';
  otherState: string = '';
  city: string = '';
  otherCity: string = '';
  isTeacher: boolean = false;
  isSportPerson: boolean = false;
  isMusician: boolean = false;

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`.trim();
  }

  submitForm() {
    console.log({
      fullName: this.fullName,
      state: this.state === 'Other' ? this.otherState : this.state,
      city: this.city === 'Other' ? this.otherCity : this.city,
      isTeacher: this.isTeacher,
      isSportPerson: this.isSportPerson,
      isMusician: this.isMusician
    });
    alert('Form submitted! Check console for values.');
  }
}