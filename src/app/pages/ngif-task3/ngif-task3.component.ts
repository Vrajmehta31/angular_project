import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ngif-task3',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ngif-task3.component.html',
  styleUrl: './ngif-task3.component.css'
})
export class NgifTask3Component {
  isDiv1Visible: boolean = true;
  isDiv2Visible: boolean = true;
  num1: string = '';
  num2: string = '';

  show() { this.isDiv1Visible = true; }
  hide() { this.isDiv1Visible = false; }
  toggleDiv2() { this.isDiv2Visible = !this.isDiv2Visible; }
}