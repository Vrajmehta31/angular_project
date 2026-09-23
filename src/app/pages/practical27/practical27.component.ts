import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-practical27',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './practical27.component.html',
  styleUrls: ['./practical27.component.css']
})
export class Practical27Component {
  @Input() firstName = 'Raj';
  @Input() lastName = 'Patel';

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`.trim();
  }
}