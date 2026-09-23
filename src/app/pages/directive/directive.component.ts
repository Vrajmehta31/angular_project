import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CourseComponent } from '../course/course.component';
import { CurrencyPipe, DatePipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-directive',
  standalone: true,
  imports: [CourseComponent, RouterLink, NgClass, CurrencyPipe, DatePipe],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css',
})
export class DirectiveComponent {
  isUserLoggedIn = true;
  grade = 'F';
  switchCourse() {
    this.isUserLoggedIn = !this.isUserLoggedIn;
  }

  className: string = 'bg-success';
  content: string = '';
  switchPri() {
    this.className = 'bg-primary';
    this.content = 'JavaScript';
  }
  switchSuc() {
    this.className = 'bg-success';
    this.content = 'TypeScript';
  }

  student = {
    id: 1258,
    name: 'Anas',
    marks: 94,
    course: 'bca(hons)',
  };

  employees = [
    {
      id: 101,
      name: 'Anas Shaikh',
      department: 'IT',
      salary: 45000,
    },
    {
      id: 102,
      name: 'Rahul Patel',
      department: 'HR',
      salary: 38000,
    },
    {
      id: 103,
      name: 'Priya Sharma',
      department: 'Finance',
      salary: 52000,
    },
    {
      id: 104,
      name: 'Amit Verma',
      department: 'Marketing',
      salary: 41000,
    },
    {
      id: 105,
      name: 'Neha Joshi',
      department: 'Sales',
      salary: 47000,
    },
  ];
  
  cities: string[] = ['Ahmedabad', 'Mumbai', 'Banglore', 'Delhi', 'Pune'];
  today = Date();
}
