import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-practical11',
  standalone: true,
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './practical11.component.html',
  styleUrl: './practical11.component.css',
})
export class Practical11Component {
  products = [
    {
      id: 1,
      name: 'Laptop',
      price: 55000,
      joiningDate: new Date('2025-05-01'),
    },
    {
      id: 2,
      name: 'Smartphone',
      price: 25000,
      joiningDate: new Date('2025-06-15'),
    },
    {
      id: 3,
      name: 'Headphones',
      price: 3000,
      joiningDate: new Date('2025-07-10'),
    },
  ];

  students = [
    { name: 'Sonal K Patel' },
    { name: 'Anas Shaikh' },
    { name: 'Rahul Kumar Patel' },
  ];
}
