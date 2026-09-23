import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordStrengthValidator } from '../../validators/password-strength.validator';

@Component({
  selector: 'app-practical23',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],   // ReactiveFormsModule is required for formGroup/formControlName
  templateUrl: './practical23.component.html',
  styleUrls: ['./practical23.component.css']
})
export class Practical23Component {
  passwordForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.passwordForm = this.fb.group({
      password: ['', [Validators.required, passwordStrengthValidator()]]
      // Validators.required + our custom validator run together
    });
  }

  get password() {
    return this.passwordForm.get('password');
  }
}