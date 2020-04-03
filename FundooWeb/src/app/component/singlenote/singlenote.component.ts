import { Component, OnInit, Input  } from '@angular/core';
import {Note } from '../../model/note.model';
import { MatTooltip, MatSnackBar, MatDialog } from '@angular/material';
//import { noteDetail } from '../displaynotes/displaynotes.component';


@Component({
  selector: 'app-singlenote',
  templateUrl: './singlenote.component.html',
  styleUrls: ['./singlenote.component.scss']
})
export class SinglenoteComponent implements OnInit {

  @Input() noteDetail:Note;
  constructor( ) { }

  ngOnInit() {
  }

  pin(){
    this.noteDetail.isPinned;
    console.log( this.noteDetail.isPinned);

  }
  
  

}
