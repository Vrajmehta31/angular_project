import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-counter-a',
  standalone: true,
  template: `
    <div class="counter-box">
      <h3>Component A (Incrementer)</h3>
      <button (click)="increment()">Increment Counter</button>
    </div>
  `
})
export class CounterAComponent {
  constructor(private counterService: CounterService) {}

  increment(): void {
    this.counterService.increment();
  }
}