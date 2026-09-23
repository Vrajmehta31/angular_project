import { Component } from '@angular/core';

@Component({
  selector: 'app-practical9',
  standalone: true,
  imports: [],
  templateUrl: './practical9.component.html',
  styleUrl: './practical9.component.css',
})
export class Practical9Component {
  message = '';

  products = [
    { id: 1, name: 'Laptop', price: 55000 },
    { id: 2, name: 'Smartphone', price: 25000 },
    { id: 3, name: 'Headphones', price: 3000 },
  ];

  buyProduct(productName: string) {
    this.message = `You have selected ${productName}.`;
    console.log(productName);
  }
}
