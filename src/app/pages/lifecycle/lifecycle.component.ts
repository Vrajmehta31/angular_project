import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [SlicePipe],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css',
})
export class LifecycleComponent implements OnInit {

  products: any[] = [];

  constructor(private prodService: ProductService) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    this.prodService.getProd().subscribe((data: any[]) => {
      this.products = data;
      console.log(this.products);
    });
  }
}