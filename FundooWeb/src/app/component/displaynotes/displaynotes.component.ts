import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Note } from '../../model/note.model';
import { NoteService } from '../../service/note.service';
import { debug } from 'util';
import {ActivatedRoute,Router} from '@angular/router';
import { GetnotesService } from '../../service/getnotes.service';
import { LabelService } from '../../service/label.service';


@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {

  trashedNotes: boolean = false;
  archiveNotes: boolean = false;
  trashEmpty:boolean=false;
  searchnote:any;
  searchNotes:boolean;
  reminderNotes:boolean=false;
  labelNotes: boolean = false;

  respo
  pined=new Array<Note>();
  others=new Array<Note>();
  archive=new Array<Note>();
  trash=new Array<Note>();
 displayNotes=new Array<Note>();
  note=new Note;

  constructor(private noteservice: NoteService,
     private router: Router,private _route:ActivatedRoute,private labelservice:LabelService) { }
     private noteDetails:Note[];
     private param:any;
     private notes:Note[];
     
     ngOnInit() {
      
        this.param=this._route.snapshot.paramMap.get('note');
        if (this.param == "archive") 
        {
          this.ArchiveNotes();
        }
        else if(this.param == "trash")
        {
          this.TrashNotes();
        } else if(this.param == "label")
        {
          console.log('Inside Labels ');
          this.getAllLabelNotes();
        }
        else
        {
         this.displayNote();
         this.getView();
         
        }
        this.getSearchNoteData();
        
      }
       displayNote(){
        this.trashedNotes = false;
        this.archiveNotes = false;
        this.trashEmpty=false;
       this.noteservice.getAllNotes()
             .subscribe((noteData => {
              this.respo=noteData;
              this.displayNotes=this.respo;
             this. pined=[];
              this.others=[];
            //  this.archive=[];
            //  this.trash=[];
          
              
              this.displayNotes.filter(note=>note.isPinned===false&&note.isArchived===false&&note.isTrashed===false).map(note=>this.others.push(note));
              this.displayNotes.filter(note=>note.isPinned===true&&note.isArchived===false&&note.isTrashed===false).map(note=>this.pined.push(note)); 
             // this.displayNotes.filter(note=>note.isPinned===false&&note.isArchived===true&&note.isTrashed===false).map(note=>this.archive.push(note));
             // this.displayNotes.filter(note=>note.isTrashed===true).map(note=>this.trash.push(note)); 
              // this.noteDetails=noteData;
               
              //  console.log(this.others);
              //  console.log(this.pined);
  
             }));
            }
            private tempNoteId:number;

   
            getAllLabelNotes(){
              this.labelNotes=true;
              this.trashedNotes = false;
              this.archiveNotes = false;
              this.trashEmpty=false;
              this.tempNoteId=this.labelservice.getNoteIdd();
               console.log("check label NNoteId",this.tempNoteId);
             this.noteservice.getAllNotes()
                   .subscribe((noteData => {
                    this.respo=noteData;
                    this.displayNotes=this.respo;
                   this. pined=[];
                    this.others=[];
                  //  this.archive=[];
                  //  this.trash=[];
                
                    
                    this.displayNotes.filter(note=>note.noteid===this.tempNoteId).map(note=>this.others.push(note));
                   // this.displayNotes.filter(note=>note.isPinned===true&&note.isArchived===false&&note.isTrashed===false).map(note=>this.pined.push(note)); 
                   // this.displayNotes.filter(note=>note.isPinned===false&&note.isArchived===true&&note.isTrashed===false).map(note=>this.archive.push(note));
                   // this.displayNotes.filter(note=>note.isTrashed===true).map(note=>this.trash.push(note)); 
                    // this.noteDetails=noteData;
                     
                    //  console.log(this.others);
                    //  console.log(this.pined);
        
                   }));
          
                       
                       
               }
            ArchiveNotes(){
              this.archiveNotes = true;
              this.trashedNotes = false;
              this.trashEmpty=false;
   
              this.noteservice.getAllNotes()
             .subscribe((noteData => {
              this.respo=noteData;
              this.displayNotes=this.respo;
             // this.archive=[];
              this.others=[];
              this.displayNotes.filter(note=>note.isPinned===false&&note.isArchived===true&&note.isTrashed===false).map(note=>this.others.push(note));
           
            }));
          }

          TrashNotes(){
            this.trashedNotes = true;
            this.noteservice.getAllNotes()
            .subscribe((noteData => {
             this.respo=noteData;
             this.displayNotes=this.respo;
           //  this.trash=[];
             this.others=[];
             this.displayNotes.filter(note=>note.isTrashed===true).map(note=>this.others.push(note));

          }));
        }
        getSearchNoteData(){
          this.noteservice.getSearchNoteData().subscribe((message)=>{
            console.log("search data",message.notes);
              this.searchnote=message.notes;
              this.searchNotes=true;
              if(message.notes==""){
                this.searchNotes=false;
              }
          });
        }
        view:string;
        getView(){
          this.noteservice.getView().subscribe(
            (response:any)=>{
                     this.view=response.view;
                 }
          );
          console.log('View ',this.view);
          
        }
      
    }


    

  