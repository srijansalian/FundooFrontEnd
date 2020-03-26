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

  // [x: string]: any;
  // note: Note = new Note();
  // popup: boolean = false;
  // notes:Note[];
  // getAllNotes: [];
  // pinnotes: Note[];
  // unpinnotes:Note[];

  constructor(private noteservice: NoteService,
     private router: Router) { }
     private noteDetails:Note[];
     ngOnInit() {
       this.noteservice.getAllNotes()
             .subscribe((noteData => this.noteDetails=noteData));
             console.log('Notes ',this.noteDetails);
     }
    }

  // ngOnInit() {
  //   this.displayNotes();
  // }

//   public displayNotes() {
//     let getPinnedNotes = this.noteservice.getPinnedAllNote();
//     this.noteservice.getAllNotes().subscribe((response: any) => {
//       console.log(response.note);
//       this.notes = response.note;
//       console.log(this.notes)
//     })
//     // this.noteservice.getPinnedAllNote().subscribe(
//     //   (data) => {
//     //     console.log("Pin Notes"+data.data);
//     //     this.pinnotes = data.note;
//     // })
   
//   }
  
//   closeClick(newNote: any) {
//     console.log(this.note.title);
//     console.log(this.note.description);
//     this.updateNote(newNote);
//   }
//   // onClickNoteId(id) {
//   //   this.noteservice.pinNote(id);
//   // }

// }
