import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})

export class CanFlyPipe implements PipeTransform {
  transform(vuela: boolean): 'Vuela' | 'No vuela' {
    return (vuela) ? 'Vuela' : 'No vuela';
  }
}
