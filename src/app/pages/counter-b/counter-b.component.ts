import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-counter-b',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="counter-box">
      <h3>Component B (Display)</h3>
      <p>Current Count: <strong>{{ count$ | async }}</strong></p>
    </div>
  `
})
export class CounterBComponent {
  count$: Observable<number>;

  constructor(private counterService: CounterService) {
    this.count$ = this.counterService.count$;
  }
}