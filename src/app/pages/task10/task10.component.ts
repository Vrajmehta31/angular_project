import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task10',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task10.component.html',
  styleUrl: './task10.component.css'
})
export class Task10Component {
  numberInput: string = '';
  tableRows: { multiplier: number; result: number }[] = [];

  printTable() {
    if (!this.numberInput.trim()) { alert('To Enter Value'); return; }
    const num = Number(this.numberInput);
    this.tableRows = Array.from({ length: 10 }, (_, i) => ({ multiplier: i + 1, result: num * (i + 1) }));
  }
}