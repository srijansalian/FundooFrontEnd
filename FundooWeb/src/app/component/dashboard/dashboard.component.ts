import { Component, OnInit ,Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav, MatDialog } from '@angular/material';
import {NoteService } from 'src/app/service/note.service';
import {LabelService } from '../../service/label.service';
import { Note } from '../../model/note.model';
import { Label } from '../../model/label.model';
import { EditlabelComponent } from '../../component/editlabel/editlabel.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Output() toggleEvent = new EventEmitter<boolean>();

  title: String;
  description: String;
data
  labels: Label[];
  notes:Note[];
  
  

  constructor(private router:Router,private noteservice: NoteService,private labelservice:LabelService,private dialog: MatDialog) { }

  ngOnInit() {
    this.labelservice.getAlllab()
    .subscribe((noteData => {
      this.data=noteData;
      this.labels=noteData;
      console.log(this.labels);
  }));
  }

  signout() {
    localStorage.clear();
    this.router.navigateByUrl('login');
  }
  note(){
    this.router.navigateByUrl('dashboard');
  }
  // onArchive(){
  //   this.router.navigateByUrl('archive');
  // }
  onArchive(){
    this.router.navigate(['dashboard/displaynotes','archive']);
    
  }
  ontrash(){
    this.router.navigate(['dashboard/displaynotes','trash']);
  }

  searchNote() {
    console.log();
    this.noteservice.setSearchNoteData(this.title);
  }

  getLabelList(){
    this.labelservice.getAllLabels().subscribe(message=>{
         this.labels=message.list;
        console.log(message);
    })
  }

  getNotesList() {
    this.labelservice.getNoteList().subscribe(message => {
      this.notes = message.notes;
      
    });
  }

SetLabelId(labelId) {
    this.labelservice.getNotesByLabel(labelId).subscribe((data)=>{
          console.log(data);
          this.setlabelNotes(data);
    });

  }
 setlabelNotes(notes){
      this.labelservice.setlabelsNotes(notes);
  }
  // label(){
 
  //           this.labelservice.getAlllab()
  //           .subscribe((noteData => {
  //             this.data=noteData;
  //             this.labels=noteData;
  //             console.log(this.labels);
  //         }));
  //       }
  openDialog(labels:Label[]): void {
    const dialogRef = this.dialog.open(EditlabelComponent,{
      width: '380px',
      height: 'auto',

      data: { labels }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  
}
