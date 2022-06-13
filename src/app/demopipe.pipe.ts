import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class DemopipePipe implements PipeTransform {
  nvalue: string = "";

  transform(value: any): any {
    this.nvalue = value.split("").reverse().join("");

    return this.nvalue;
  }

}
