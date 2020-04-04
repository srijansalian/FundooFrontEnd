import { Component, OnInit,Input} from '@angular/core';
import { MatTooltip, MatSnackBar, MatDialog } from '@angular/material';
import { Note } from '../../model/note.model';
import { NoteService } from '../../service/note.service';
//import { AmazingTimePickerService } from 'amazing-time-picker';

@Component({
  selector: 'app-noteicon',
  templateUrl: './noteicon.component.html',
  styleUrls: ['./noteicon.component.scss']
})
export class NoteiconComponent implements OnInit {

  @Input() note: Note;
  noteId: number;
  isArchive: boolean = false;
  public selectedTime = '18:33';
  today: string;
  isoo: any;
  constructor(private dialog: MatDialog, private noteService: NoteService,  private snackBar: MatSnackBar) {
   
  }
  ngOnInit() {
  }

  onClickDelete() {
    this.noteId = this.note.noteid;
    this.noteService.moveToTrash(this.note.noteid).subscribe((response) => {
      this.snackBar.open("Note unpinned and trashed", 'ok', { duration: 5000 });
    },
      error => {
        this.snackBar.open("error in Note Deletion", 'ok', { duration: 5000 });

      }
    );
  }

  onClickArchive(archive: boolean, pin) {
    this.noteService.moveToArchiveNote(this.note.noteid).subscribe((response) => {
      console.log("value::", this.note.isArchived, "pin", this.note.isPinned);
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
}


