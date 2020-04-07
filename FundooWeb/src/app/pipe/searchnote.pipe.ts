import { Pipe, PipeTransform } from '@angular/core';
import { Note } from '../model/note.model';
import { NoteService } from '../service/note.service';

@Pipe({
  name: 'searchnote'
})
export class SearchnotePipe implements PipeTransform {

  transform(notes: Note[], searchTerm:string): Note[] {
    if(!notes || !searchTerm){
      return notes;
    }
    return notes.filter(notes=>
     notes.title .toLowerCase().indexOf(searchTerm.toLowerCase())!=-1) ;
    
      
   }

}
