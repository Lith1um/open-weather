import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'round'
})
export class RoundPipe implements PipeTransform {

  transform(number: any, decimalPoints: number = 0): number {
    return parseFloat(number.toFixed(decimalPoints));
  }

}
