import { Component, OnInit ,Inject} from '@angular/core';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Label } from '../../model/label.model';
import { LabelService } from '../../service/label.service';

@Component({
  selector: 'app-editlabel',
  templateUrl: './editlabel.component.html',
  styleUrls: ['./editlabel.component.scss']
})
export class EditlabelComponent implements OnInit {
  labels:Label[];
  changeText: boolean;

  constructor(public dialogRef: MatDialogRef<EditlabelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private labelService:LabelService,private matSnackBar:MatSnackBar) { 
      labelService.autoRefresh$.subscribe(()=>{
        this.labels=data.labels;
      });
      this.labels=data.labels;
      this.changeText = false;

    }
    
    
  ngOnInit() {
    this. labelService.getAlllab()
    .subscribe((noteData => {
      this.data=noteData;
      this.labels=noteData;
      console.log(this.labels);
  }));
  }
  onClickCreateLabel(InputLabel){
    let label={
      "labelName":InputLabel
    }
      this.labelService.createLabel(label).subscribe((response)=>{
        this.matSnackBar.open("Label Created","Ok",{duration:3000});
      });
  }
  onClickDeleteLabel(label){
    this.labelService.deleteLabel(label).subscribe((response)=>{
      this.matSnackBar.open("Label Deleted","Ok",{duration:3000});
    });
  }

}
