import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nospaces'
})
export class NospacesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.replace(/ /g, '-');
  }

}
