import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ngclass-task3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngclass-task3.component.html',
  styleUrl: './ngclass-task3.component.css'
})
export class NgclassTask3Component {
  divClass: string = '';
  languages: string[] = ['Html', 'CSS', 'Java-Script', 'JQuery', 'Angular', 'React', 'Dot Net', 'Java'];
  selectedLanguage: string = '';

  setSuccess() {
    this.divClass = 'bg-success';
  }

  setDanger() {
    this.divClass = 'bg-danger';
  }

  selectLanguage(lang: string) {
    this.selectedLanguage = lang;
  }
}