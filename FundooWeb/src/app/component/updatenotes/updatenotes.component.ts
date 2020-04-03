import { Component, OnInit,Inject } from '@angular/core';
import { Note } from '../../model/note.model';
import {NoteService } from '../../service/note.service';


@Component({
  selector: 'app-updatenotes',
  templateUrl: './updatenotes.component.html',
  styleUrls: ['./updatenotes.component.scss']
})
export class UpdatenotesComponent implements OnInit {
  note:Note;

  constructor() { 
      //this.note=this.data.note;
    }

  ngOnInit() {
  }

}
