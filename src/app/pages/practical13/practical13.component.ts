import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverdueHighlightDirective } from '../../directives/overdue-highlight.directive';

interface Task {
  title: string;
  dueDate: string;
}

@Component({
  selector: 'app-practical13',
  standalone: true,
  imports: [CommonModule, OverdueHighlightDirective],
  templateUrl: './practical13.component.html',
  styleUrls: ['./practical13.component.css']
})
export class Practical13Component {
  tasks: Task[] = [
    { title: 'Submit assignment', dueDate: '2026-01-10' },
    { title: 'Prepare presentation', dueDate: '2026-12-01' },
    { title: 'Update project report', dueDate: '2026-05-15' },
    { title: 'Team meeting notes', dueDate: '2026-10-01' }
  ];
}