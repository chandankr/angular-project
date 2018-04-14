import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertBoolean'
})
export class ConvertBooleanPipe implements PipeTransform {

  transform(value: boolean, args?: any): any {
    return value==true?"Yes":"No";
  }

}
