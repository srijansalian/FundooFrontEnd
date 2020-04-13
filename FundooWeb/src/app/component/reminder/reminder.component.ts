import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Note } from '../../model/note.model';
import { NoteService } from '../../service/note.service';
import { debug } from 'util';
import {ActivatedRoute,Router} from '@angular/router';
import { GetnotesService } from '../../service/getnotes.service';
import { LabelService } from '../../service/label.service';


@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss']
})
export class ReminderComponent implements OnInit {
  trashedNotes: boolean = false;
  archiveNotes: boolean = false;
  trashEmpty:boolean=false;
  searchnote:any;
  searchNotes:boolean;
  reminderNotes:boolean=false;
  labelNotes: boolean = false;

  respo
  pined=new Array<Note>();
  others=new Array<Note>();
  archive=new Array<Note>();
  trash=new Array<Note>();
 displayNotes=new Array<Note>();
  note=new Note;

  constructor(private noteservice: NoteService,
    private router: Router,private _route:ActivatedRoute,private labelservice:LabelService) { }

  ngOnInit() {
   this.displayNote();
   this.getView();
  }
  displayNote(){
    this.trashedNotes = false;
    this.archiveNotes = false;
    this.trashEmpty=false;
   this.noteservice.getAllNotes()
         .subscribe((noteData => {
          this.respo=noteData;
          this.displayNotes=this.respo;
         this. pined=[];
          this.others=[];
        //  this.archive=[];
        //  this.trash=[];
      
          
         // this.displayNotes.filter(note=>note.isPinned===false&&note.isArchived===false&&note.isTrashed===false).map(note=>this.others.push(note));
          this.displayNotes.filter(note=>note.isTrashed===false).map(note=>this.others.push(note)); 
         // this.displayNotes.filter(note=>note.isPinned===false&&note.isArchived===true&&note.isTrashed===false).map(note=>this.archive.push(note));
         // this.displayNotes.filter(note=>note.isTrashed===true).map(note=>this.trash.push(note)); 
          // this.noteDetails=noteData;
           
          //  console.log(this.others);
          //  console.log(this.pined);e

         }));
        }
        view:string;
        getView(){
          this.noteservice.getView().subscribe(
            (response:any)=>{
                     this.view=response.view;
                 }
          );
          console.log('View ',this.view);
          
        }

}
