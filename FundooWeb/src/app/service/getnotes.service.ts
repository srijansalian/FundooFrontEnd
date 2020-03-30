import { Injectable } from '@angular/core';
import { Note } from '../model/note.model';
import { Subject } from 'rxjs';
import {NoteService } from '../service/note.service';


@Injectable({
  providedIn: 'root'
})
export class GetnotesService {
  notes:Note[]
pinNoteList:Note[]
archievenotes:Note[]
  constructor() { }
  setNotesList(message: Note[]) {
    this.notes=message
  }
  getNotesList(){
  
    return this.notes

  }
  setPinNotesList(message: Note[]) {
    this.pinNoteList=message
  }
  getPinNotesList() {
   return this.pinNoteList
  }
  setarchieveNotesList(message: Note[]) {
    this.archievenotes=message
  }
  getarchieveNotesList() {
   return this.archievenotes
  }
}
