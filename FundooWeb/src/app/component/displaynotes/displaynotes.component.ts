import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Note } from '../../model/note.model';
import { NoteService } from '../../service/note.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {

  constructor(private noteservice: NoteService,
     private router: Router) { }
     private noteDetails:Note[];
     ngOnInit() {
       this.noteservice.getAllNotes()
             .subscribe((noteData => this.noteDetails=noteData));
             console.log('Notes ',this.noteDetails);
     }
    }

  