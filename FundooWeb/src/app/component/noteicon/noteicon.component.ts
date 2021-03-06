import { Component, OnInit,Input} from '@angular/core';
import { MatTooltip, MatSnackBar, MatDialog } from '@angular/material';
import { Note } from '../../model/note.model';
import { NoteService } from '../../service/note.service';
import {LabelComponent} from '../../component/label/label.component';
import{CollaboratorComponent} from '../../component/collaborator/collaborator.component';

@Component({
  selector: 'app-noteicon',
  templateUrl: './noteicon.component.html',
  styleUrls: ['./noteicon.component.scss']
})
export class NoteiconComponent implements OnInit {

  @Input() note: Note;
  noteId: number;
  isArchive: boolean = false;
  reminderTime = null;
  reminderDate = null;
  reminderFrequency = null;
  constructor(private dialog: MatDialog, private noteService: NoteService,  private snackBar: MatSnackBar) {
   
  }
  ngOnInit() {
  }

  Delete() {
    this.noteId = this.note.noteid;
    this.noteService.moveToTrash(this.note.noteid).subscribe((response) => {
      this.snackBar.open("Note unpinned and trashed", 'ok', { duration: 5000 });
    },
      error => {
        this.snackBar.open("error in Note Deletion", 'ok', { duration: 5000 });

      }
    );
  }
  Archive(archive: boolean, isPinned) {
    this.noteService.moveToArchiveNote(this.note.noteid).subscribe((response) => {
      if (this.note.isArchived == true) {
        this.snackBar.open("UnArchived", "OK", { duration: 5000 });
      }
      if (this.note.isPinned = true) {
        this.snackBar.open("Note unpinned and Archived", "OK", { duration: 5000 });
      }
      else {
        this.snackBar.open("Note Archived", "OK", { duration: 5000 });
      }
    },
      error => {
        this.snackBar.open("error in Note thrash operation", "OK", { duration: 5000 });
      });
  }
  setColor(color) {
    this.noteService.addColor(this.noteId, color).subscribe(res => {
      this.snackBar.open("color Changed", "OK", { duration: 3000 });
    })
  }
  arrayOfColors = [
    [
      { color: "rgb(255, 179, 255)", name: "pink" },
      { color: "rgb(255, 255, 128)", name: "darkGolden" },
      { color: "rgb(200, 232, 104)", name: "yellow" },
      { color: " rgb(158, 136, 191)", name: "darkYellow" }
    ],
    [
      { color: "slategray", name: "grey" },
      { color: "rgb(153, 221, 255)", name: "Teal" },
      { color: "rgb(203,240,248)", name: "blue" },
      { color: "rgb(174,203,250)", name: "Dark blue" },
    ],
    [
      { color: "rgb(255, 153, 0)", name: "orange" },
      { color: "rgb(97, 191, 82)", name: "green" },
      { color: "white", name: "white" },
      { color: " rgb(196,174,251)", name: "purpule" }

    ]
  ]
 
  reminderAdd(str) {
    const d = new Date();
    this.reminderFrequency = null;
    if (str == 'today') {
      this.reminderDate = d.getMonth() + 1 + '/' + d.getDate() + '/' + d.getFullYear();
      this.reminderTime = '8:00 PM';
      console.log(this.reminderDate + ' ' + this.reminderTime);
      return;
    }
    if (str == 'tomorrow') {
      d.setDate(d.getDate() + 1);
      this.reminderDate = d.getMonth() + 1 + '/' + d.getDate() + '/' + d.getFullYear();
      this.reminderTime = '8:00 AM';
      console.log(this.reminderDate + ' ' + this.reminderTime);
      return;
    }
    if (str == 'next') {
      d.setDate(d.getDate() + (1 + 7 - d.getDay()) % 7);
      this.reminderDate = d.getMonth() + 1 + '/' + d.getDate() + '/' + d.getFullYear();
      this.reminderTime = '8:00 AM';
      console.log(this.reminderDate + ' ' + this.reminderTime);
      return;
    }
  }
  opencol(): void {
  
    const dialogRef = this.dialog.open(CollaboratorComponent, {
      width: '490px',
      height: '290px',

      panelClass: 'custom-dialog-container',
      data: { noteId: this.noteId}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openLabel(note): void {
    const dialogRef = this.dialog.open(LabelComponent, {
      width: '250px', height: 'auto', data: { note }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Close');
    });
  }
}


