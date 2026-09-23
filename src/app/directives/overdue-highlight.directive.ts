import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appOverdueHighlight]',
  standalone: true
})
export class OverdueHighlightDirective implements OnInit {
  @Input('appOverdueHighlight') dueDate!: string | Date;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const due = new Date(this.dueDate);
    const today = new Date();
    if (due < today) {
      this.el.nativeElement.style.color = 'red';
      this.el.nativeElement.style.fontWeight = 'bold';
    }
  }
}