import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converter'
})
export class ConverterPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    let [data]=args
    if(data){
      return value*data
    }
    return value*85;
  }
}
