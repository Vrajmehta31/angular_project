import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reports',
  standalone: false,   // ⬅ IMPORTANT: this component belongs to ReportsModule, not standalone
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {
  reportGenerated = false;

  generateReport(): void {
    this.reportGenerated = true;
  }
}