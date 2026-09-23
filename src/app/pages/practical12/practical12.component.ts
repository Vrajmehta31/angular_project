import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbbreviateNamePipe } from '../../pipes/abbreviate-name.pipe';   // ⬅ CHANGE: path must point exactly to the pipe file

@Component({
  selector: 'app-practical12',
  standalone: true,
  imports: [CommonModule, AbbreviateNamePipe],   // ⬅ CHANGE: pipe MUST be listed here, or the template can't see it
  templateUrl: './practical12.component.html',
  styleUrls: ['./practical12.component.css']
})
export class Practical12Component {
  fullName: string = 'Sonal K Patel';
  names: string[] = ['Sonal K Patel', 'Vraj M Shah', 'Amit Kumar'];
}