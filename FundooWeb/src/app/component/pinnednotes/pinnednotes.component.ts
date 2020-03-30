import { Component, OnInit,Input } from '@angular/core';
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
  @Input() note: Note;
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
  //       // this.dialogRef.close();
  //     }
  //     else if (!this.note.isPinned) {
  //       this.isPinned = true;
  //       this.matSnackBar.open("Note Pinned Successfully", 'Ok', { duration:3000 });
  //       // this.dialogRef.close();
  //     }
  //     console.log(response);
  //     // this.dialogRef.close();
  //   },
  //     (error: any) => {
  //       console.log("error");
  //     });
  // }

}
