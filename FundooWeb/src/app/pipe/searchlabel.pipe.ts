import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchlabel'
})
export class SearchlabelPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    
    return null;
  }
  

}
