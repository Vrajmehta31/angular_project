import { Injectable } from '@angular/core';

export interface Student {
  id: number;
  name: string;
  course: string;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Student[] = [
    { id: 101, name: 'Sonal K Patel', course: 'BCA' },
    { id: 102, name: 'Vraj M Shah', course: 'BCA' },
    { id: 103, name: 'Amit Kumar', course: 'BSc IT' }
  ];

  getAllStudents(): Student[] {
    return this.students;
  }

  getStudentById(id: number): Student | undefined {
    return this.students.find(s => s.id === id);
  }
}