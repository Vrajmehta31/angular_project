import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abbreviateName',
  standalone: true          // ⬅ CHANGE: this was likely missing — required for standalone projects
})
export class AbbreviateNamePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    return value
      .trim()
      .split(/\s+/)
      .map(word => word.charAt(0).toUpperCase())
      .join('.') + '.';
  }
}