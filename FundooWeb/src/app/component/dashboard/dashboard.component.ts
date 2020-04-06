import { Component, OnInit ,Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {NoteService } from 'src/app/service/note.service';
import {LabelService } from '../../service/label.service';
import { Note } from '../../model/note.model';
import { Label } from '../../model/label.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Output() toggleEvent = new EventEmitter<boolean>();

  title: String;
  description: String;

  labels: Label[];
  notes:Note[];

  constructor(private router:Router,private noteservice: NoteService,private labelservice:LabelService) { }

  ngOnInit() {
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
      console.log("side nave notes:", this.notes);
    });
  }

  onCLickSetLabelId(labelId) {
    this.labelservice.getNotesByLabel(labelId).subscribe((data)=>{
          console.log(data);
          this.setlabelNotes(data);
    });

  }
 setlabelNotes(notes){
      this.labelservice.setlabelsNotes(notes);
  }
}
