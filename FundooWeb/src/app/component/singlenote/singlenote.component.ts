import { Component, OnInit, Input  } from '@angular/core';
import {Note } from '../../model/note.model';
import {NoteService } from '../../service/note.service';
import { MatTooltip, MatSnackBar} from '@angular/material';
import { UpdatenotesComponent } from '../updatenotes/updatenotes.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LabelService } from '../../service/label.service';

@Component({
  selector: 'app-singlenote',
  templateUrl: './singlenote.component.html',
  styleUrls: ['./singlenote.component.scss']
})
export class SinglenoteComponent implements OnInit {

  @Input() noteDetail:Note;
  constructor(private noteService:NoteService,private snackBar: MatSnackBar,private dialog: MatDialog ,private labelservice:LabelService ) { }

  ngOnInit() {
  }

  pin(){
    this.noteDetail.isPinned;
    console.log( this.noteDetail.isPinned);

  }
  open(note): void {
    const dialogRef = this.dialog.open(UpdatenotesComponent, {
      width: 'auto',
      panelClass: 'custom-dialog-container',
      data: { note }
    });
    dialogRef.afterClosed().subscribe(result => {

    });
  }
  private labelArray:[];
  getLabel(){
    this.labelservice.getAllLabels().subscribe(
      (response:any)=>{
          this.labelArray=response;
          console.log('Labell ',this.labelArray);
          
      }
    )
  }
  
  

}
