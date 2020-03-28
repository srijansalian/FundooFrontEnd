import { Component, OnInit, Input  } from '@angular/core';
import {Note } from '../../model/note.model';


@Component({
  selector: 'app-singlenote',
  templateUrl: './singlenote.component.html',
  styleUrls: ['./singlenote.component.scss']
})
export class SinglenoteComponent implements OnInit {

  @Input() noteDetail:Note;
  constructor() { }

  ngOnInit() {
  }

}
