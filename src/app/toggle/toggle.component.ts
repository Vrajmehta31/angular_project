import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.css'
})
export class ToggleComponent {
 myClass: string = '';
toggleClass() {
  this.myClass = this.myClass === 'bg-success' ? '' : 'bg-success' : 'bg-danger';

}
}
