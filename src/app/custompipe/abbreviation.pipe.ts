import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abbreviation',
  standalone: true
})
export class AbbreviationPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
