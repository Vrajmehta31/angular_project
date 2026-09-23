import { Component } from '@angular/core';
import { Product } from '../../product';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-practical3',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './practical3.component.html',
  styleUrl: './practical3.component.css',
})
export class Practical3Component {
  products: Product[] = [
    {
      id: 1,
      name: 'Mouse',
      price: 299,
      category: 'Electronics',
    },
    {
      id: 2,
      name: 'Keyboard',
      price: 799,
      category: 'Electronics',
    },
    {
      id: 3,
      name: 'Notebook',
      price: 99,
      category: 'Stationery',
    },
  ];
}
