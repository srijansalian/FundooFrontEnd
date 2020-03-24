import { Component, OnInit } from '@angular/core';
import {NoteService} from '../../service/note.service';
import { Note } from '../../model/note.model';
import { MatSnackBar, MatDialog } from '@angular/material';
import {GetnotesService } from '../getnotes.service';

@Component({
  selector: 'app-singlenote',
  templateUrl: './singlenote.component.html',
  styleUrls: ['./singlenote.component.scss']
})
export class SinglenoteComponent implements OnInit {

  constructor(private getnoteservice:GetnotesService,) { }

  ngOnInit() {
  }
  getnotes(){
    this.getnoteservice.allNote();
    }
    

}
