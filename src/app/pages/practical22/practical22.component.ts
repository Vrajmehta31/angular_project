import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-practical22',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './practical22.component.html',
  styleUrls: ['./practical22.component.css']
})
export class Practical22Component {
  loginForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  onSubmit(): void {
    this.submitted = true;
    if (this.loginForm.valid) {
      console.log('Login Data:', this.loginForm.value);
    }
  }
}