import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { Practical7Component } from '../../practical7/practical7.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, Practical7Component],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  currentItem = 'Televison';
  photo = 'https://randomuser.me/api/portraits/men/1.jpg';
  name = 'Johm';
  marks = '98';
  course = 'BCA';
}
