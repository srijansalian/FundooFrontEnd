import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Note } from '../../model/note.model';
import { NoteService } from '../../service/note.service';
import { Router } from '@angular/router';
import { debug } from 'util';
import { GetnotesService } from '../../service/getnotes.service';


@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {

  respo
  pined=new Array<Note>();
  others=new Array<Note>();
  displayNotes=new Array<Note>();
  note=new Note;

  constructor(private noteservice: NoteService,
     private router: Router) { }
     private noteDetails:Note[];
     
     ngOnInit() {
       debug
       this.noteservice.getAllNotes()
             .subscribe((noteData => {
              this.respo=noteData;
              this.displayNotes=this.respo;
             this. pined=[];
              this.others=[];
              console.log(this.displayNotes.filter(note=>note.noteid===1));
              console.log(this.displayNotes.filter(note=>note.title==="Introduction"));
              console.log(this.displayNotes.filter(note=>note.isPinned===false));
              console.log(this.displayNotes.filter(note=>note.isPinned===false&&note.isArchived===false&&note.isTrashed===false));
              this.displayNotes.filter(note=>note.isPinned===false&&note.isArchived===false&&note.isTrashed===false).map(note=>this.others.push(note));
              this.displayNotes.filter(note=>note.isPinned===true&&note.isArchived===false&&note.isTrashed===false).map(note=>this.pined.push(note)); 
               this.noteDetails=noteData;
               
               console.log(this.others);
               console.log(this.pined);
              //  console.log(noteData);
              //  console.log(this.respo);
               
               
             }));
             
             
     }


    }

  