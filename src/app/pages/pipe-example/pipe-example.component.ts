import {
  CurrencyPipe,
  DatePipe,
  JsonPipe,
  LowerCasePipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { NaPipe } from '../../custompipe/na.pipe';

@Component({
  selector: 'app-pipe-example',
  standalone: true,
  imports: [
    CurrencyPipe,
    UpperCasePipe,
    DatePipe,
    JsonPipe,
    LowerCasePipe,
    TitleCasePipe,
    SlicePipe,
    NaPipe,
  ],
  templateUrl: './pipe-example.component.html',
  styleUrl: './pipe-example.component.css',
})
export class PipeExampleComponent {
  today = Date();
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

  emp = [
    {
      id: 101,
      name: 'Anas',
      city: 'Ahmedabad',
      state: 'Gujarat',
    },
  ];

  currentUser = {
    id: 101,
    name: 'Sarah Connor',
    roles: ['Admin', 'Developer'],
    metadata: {
      lastLogin: '2026-07-21T14:30:00Z',
      isActive: true,
    },
  };
  cities: string[] = ['Ahmedabad', 'Mumbai', 'Banglore', 'Delhi', 'Pune'];
}
