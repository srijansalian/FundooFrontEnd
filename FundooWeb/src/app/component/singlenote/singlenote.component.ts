import { Component, OnInit, Input  } from '@angular/core';
import {Note } from '../../model/note.model';
import {NoteService } from '../../service/note.service';
import { MatTooltip, MatSnackBar} from '@angular/material';
import { UpdatenotesComponent } from '../updatenotes/updatenotes.component';
import { MatDialog, MatDialogRef } from '@angular/material';

//import { noteDetail } from '../displaynotes/displaynotes.component';


@Component({
  selector: 'app-singlenote',
  templateUrl: './singlenote.component.html',
  styleUrls: ['./singlenote.component.scss']
})
export class SinglenoteComponent implements OnInit {

  @Input() noteDetail:Note;
  constructor(private noteService:NoteService,private snackBar: MatSnackBar,private dialog: MatDialog ) { }

  ngOnInit() {
  }

  pin(){
    this.noteDetail.isPinned;
    console.log( this.noteDetail.isPinned);

  }
  onClickDeleteNote(noteId){
    console.log('Note Id ',noteId);
      this.noteService.moveToTrash(noteId).subscribe(
      (response:any)=>{
        this.snackBar.open(response.message, "OK", { duration: 3000 });
      },
      error => {
        this.snackBar.open("Error in Note", "OK", { duration: 4000 });
      });
  }
  openDialog(note): void {
    //console.log("note Id:" + note.id);
    const dialogRef = this.dialog.open(UpdatenotesComponent, {
      width: 'auto',
      panelClass: 'custom-dialog-container',
      data: { note }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  
  

}
