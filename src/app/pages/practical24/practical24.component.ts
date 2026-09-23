import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-practical24',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './practical24.component.html',
  styleUrls: ['./practical24.component.css']
})
export class Practical24Component {
  subjectForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.subjectForm = this.fb.group({
      subjects: this.fb.array([this.createSubject()])
    });
  }

  createSubject(): FormGroup {
    return this.fb.group({
      subjectName: ['', Validators.required],
      marks: ['', [Validators.required, Validators.min(0), Validators.max(100)]]
    });
  }

  get subjects(): FormArray {
    return this.subjectForm.get('subjects') as FormArray;
  }

  addSubject(): void {
    this.subjects.push(this.createSubject());
  }

  removeSubject(index: number): void {
    this.subjects.removeAt(index);
  }

  onSubmit(): void {
    if (this.subjectForm.valid) {
      console.log('Subjects:', this.subjectForm.value.subjects);
    }
  }
}                                                                   