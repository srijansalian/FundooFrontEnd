import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Note } from '../../model/note.model';
import { NoteService } from '../../service/note.service';
import { Router } from '@angular/router';
import { debug } from 'util';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  constructor(private noteservice: NoteService,
    private router: Router) { }
    private noteDetails:Note[];

  ngOnInit() {
   
      debug
      this.noteservice.getAllNotes()
            .subscribe((noteData => {
             
              this.noteDetails=noteData; 
            }));
  }

}
