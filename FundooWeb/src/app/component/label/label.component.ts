import { Component, OnInit , Input ,Inject} from '@angular/core';
import { Note }from '../../model/note.model';
import { Label } from '../../model/label.model';
import { LabelService } from '../../service/label.service';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  notes: Note[];
  labels: Label[];
  noteId: number;
  labelId;
  lname:string="";

  constructor(public dialogRef: MatDialogRef<LabelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private labelService: LabelService, private matSnackBar: MatSnackBar) { }

  ngOnInit() {
    this.labelService.autoRefresh$.subscribe(()=>{
      this.getAllUserLabel();
    })
    
    this.getNoteId();
  }
  getNoteId() {
    this.labelService.getNoteIdForLabel().subscribe(
      message => {
        this.noteId = message.labels;
      });
  }
  getAllUserLabel() {
    this.labelService.getAllLabels().subscribe((response) => {
      this.labels = response.list;
      this.setLabelList();
    });
  }
  setLabelList() {
    this.labelService.setLabelList(this.labels);
  }

}
