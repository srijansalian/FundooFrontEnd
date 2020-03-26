import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Note } from '../../model/note.model';
import { NoteService } from '../../service/note.service';


@Component({
  selector: 'app-pinnednotes',
  templateUrl: './pinnednotes.component.html',
  styleUrls: ['./pinnednotes.component.scss']
})
export class PinnednotesComponent implements OnInit {

  [x: string]: any;
  note:Note=new Note();
  isPinned: boolean;
  Token=localStorage.getItem('token');

  constructor( private noteService: NoteService, private snackBar: MatSnackBarModule,
  public dialog: MatDialog, private sanitizer: DomSanitizer, private matSnackBar: MatSnackBar) { }

  ngOnInit() {
  }

  // pinnedNote() {
  //   console.log(this.note.id);
  //   this.noteService.pinNote(this.note.id).subscribe(response => {
  //     if (this.note.isPinned) {
  //       this.isPinned = false;
  //       this.matSnackBar.open("Note unPinned Successfully", 'Ok', { duration: 3000 });
        
  //     }
  //     else if (!this.note.isPinned) {
  //       this.isPinned = true;
  //       this.matSnackBar.open("Note Pinned Successfully", 'Ok', { duration:3000 });
        
  //     }
  //     console.log(response);
  //   },
  //     (error: any) => {
  //       console.log("error");
  //     });
  // }

}
