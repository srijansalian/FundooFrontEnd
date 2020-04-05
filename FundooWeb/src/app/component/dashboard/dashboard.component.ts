import { Component, OnInit ,Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {NoteService } from 'src/app/service/note.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Output() toggleEvent = new EventEmitter<boolean>();

  title: String;
  description: String;

  constructor(private router:Router,private noteservice: NoteService) { }

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

}
