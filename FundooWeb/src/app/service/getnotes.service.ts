import { Injectable } from '@angular/core';
import { Note } from '../model/note.model';
import { Subject } from 'rxjs';
import {NoteService } from '../service/note.service';


@Injectable({
  providedIn: 'root'
})
export class GetnotesService {
  notes = new Array<Note>();


  constructor(private noteService:NoteService) {  }
  subject=new Subject();
  // getnote(){
  //  this.allNote()
  //   return this.subject.asObservable();
  // }
  //  allNote() {
  //   this.noteService.getAllNote.subscribe(
  //     (response: any) => {
  //       this.notes = response;
  //       this.subject.next({data:this.notes})
  //     }
  //   );
  // }
}
