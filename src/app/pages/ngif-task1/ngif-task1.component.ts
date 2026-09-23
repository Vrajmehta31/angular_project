import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';   

@Component({
  selector: 'app-ngif-task1',
  standalone: true,
  imports: [CommonModule, FormsModule],         
  templateUrl: './ngif-task1.component.html',
  styleUrl: './ngif-task1.component.css'
})
export class NgifTask1Component {
  gender: string = '';
}