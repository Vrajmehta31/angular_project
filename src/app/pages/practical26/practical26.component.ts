import { Component } from '@angular/core';
import { CounterAComponent } from '../counter-a/counter-a.component';
import { CounterBComponent } from '../counter-b/counter-b.component';

@Component({
  selector: 'app-practical26',
  standalone: true,
  imports: [CounterAComponent, CounterBComponent],
  templateUrl: './practical26.component.html',
  styleUrls: ['./practical26.component.css']
})
export class Practical26Component {}