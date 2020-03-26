import { Component, OnInit } from '@angular/core';
import{  NoteService } from '../../service/note.service';
import { Note } from '../../model/note.model';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-createnotes',
  templateUrl: './createnotes.component.html',
  styleUrls: ['./createnotes.component.scss']
})
export class CreatenotesComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private noteservice:NoteService,private router:Router,private matSnackBar:MatSnackBar) { }
  open: boolean = false;
  note:Note=new Note();
  isPinned:boolean;

  ngOnInit() {
  }
  titleFormControl=new FormControl('',[Validators.required]);
  descriptionFormControl=new FormControl('',[Validators.required]);
  onopen(){
    this.open=true;
  }

  pin(){
    this.note.isPinned=this.isPinned;
  }
  onCreateNote(){
    
    this.note.title=this.titleFormControl.value;
    this.note.description=this.descriptionFormControl.value;
    this.noteservice.createNotes(this.note).subscribe(  
      (response:any) =>{
         this.matSnackBar.open(response.message, "succesfull", {duration:5000})
      },
      (error:any)=> {
        this.matSnackBar.open(error.error.message, "failed", {duration:5000})
      });
    }

}
