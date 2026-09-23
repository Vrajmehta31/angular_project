import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import{FormsModule} from '@angular/forms';

@Component({
  selector: 'app-task8',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './task8.component.html',
  styleUrl: './task8.component.css'
})
export class Task8Component {
cityInput: string = '';
cities: string[] = [];
errorMessage: string = '';
addCity() {
  if (this.cityInput.trim() === '') {
    this.errorMessage = 'City name cannot be empty.';
    return;
  }
  if (this.cities.includes(this.cityInput.trim())) {
    this.errorMessage = 'City already exists in the list.';
    return;
  }
  this.cities.push(this.cityInput.trim());
  this.cityInput = '';
  this.errorMessage = '';
 }
}