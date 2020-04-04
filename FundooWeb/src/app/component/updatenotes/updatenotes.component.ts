import { Component, OnInit,Inject } from '@angular/core';
import { Note } from '../../model/note.model';
import {NoteService } from '../../service/note.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-updatenotes',
  templateUrl: './updatenotes.component.html',
  styleUrls: ['./updatenotes.component.scss']
})
export class UpdatenotesComponent implements OnInit {
  note:Note;

  constructor(public dialogRef: MatDialogRef<UpdatenotesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private noteService:NoteService,private snackbar:MatSnackBar) { 
      this.note=this.data.note;
    }

  ngOnInit() {
  }
  onSubmit(){
    this.dialogRef.close();
    this.noteService.updateNotes(this.note).subscribe((response)=>{
        this.snackbar.open("Note Updated SuccessFully","ok",{duration:5000});
    },
    (error:any)=>{

    }
    
    );
  }

}
