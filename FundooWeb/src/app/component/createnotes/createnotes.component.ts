import { Component, OnInit } from '@angular/core';
import{  NoteService } from '../../service/note.service';
import { Note } from '../../model/note.model';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router ,ActivatedRoute ,ParamMap } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-createnotes',
  templateUrl: './createnotes.component.html',
  styleUrls: ['./createnotes.component.scss']
})
export class CreatenotesComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private noteservice:NoteService,private router:Router,private matSnackBar:MatSnackBar,private _route:ActivatedRoute) { }
  open: boolean = false;
  note:Note=new Note();
  isPinned:boolean;
  date:Date =new Date();
  reminder:boolean=false;
  private param:any;

  ngOnInit() {
    this._route.paramMap.subscribe(
      (params:ParamMap)=>{
        this.param=params.get('note');
      }
    )
    if (this.param == "reminder") 
    {
      console.log('Inside create reminder ');
      
      this.reminder=true;
      console.log('Date ',this.date);
      
    }
    
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
