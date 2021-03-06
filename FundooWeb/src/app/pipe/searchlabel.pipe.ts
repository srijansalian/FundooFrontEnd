import { Pipe, PipeTransform } from '@angular/core';
import  {Label } from '../model/label.model';

@Pipe({
  name: 'searchlabel'
})
export class SearchlabelPipe implements PipeTransform {
  labels:Label[]; 

  transform(labelArray:Label[], noteId:any):Label[] {
    if(noteId==null){
      return this.labels;
    }
    return labelArray.filter(label=>label.noteId===noteId);

  }
  

}
