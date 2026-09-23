import { PercentPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-practical7',
  standalone: true,
  imports: [PercentPipe],
  templateUrl: './practical7.component.html',
  styleUrl: './practical7.component.css',
})
export class Practical7Component {
  @Input() studentPhoto = '';
  @Input() studentName = '';
  @Input() studentCourse = '';
  @Input() studentMarks = '';
}
