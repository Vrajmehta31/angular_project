import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, JsonPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  // student = {
  //   id: null,
  //   name: '',
  //   email: '',
  // };
  showData = false;
  username = '';
  userObject = {
    id: '',
    name: '',
    password: '',
    city: '',
    state: '',
    zipCode: '',
    conditions: false,
  };

  onSubmit() {
    this.showData = true;
    alert('Thank You!!');
    console.log(this.userObject.name);
    console.log(this.userObject.city);
    console.log(this.userObject.state);
    console.log(this.userObject.password);
    console.log(this.userObject.zipCode);
    console.log(this.userObject.conditions);
  }
}
