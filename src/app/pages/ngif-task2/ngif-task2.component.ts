import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ngif-task2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngif-task2.component.html',
  styleUrl: './ngif-task2.component.css'
})
export class NgifTask2Component {
 myClass: string = '';

  toggleClass() {
    this.myClass = this.myClass === 'bg-success' ? 'bg-danger' : 'bg-success';
}
}