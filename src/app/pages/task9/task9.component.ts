import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-task9',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task9.component.html',
  styleUrl: './task9.component.css'
})
export class Task9Component {
languages: string[] = ['JavaScript', 'Python', 'Java', 'C++', 'Ruby'];
selectedLanguage: string = '';
selectLanguage(language: string) {
  this.selectedLanguage = language;
}
}