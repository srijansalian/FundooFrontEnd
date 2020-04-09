import { Component, OnInit , Inject} from '@angular/core';
import { MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { User } from '../../model/user.model';
import {UserService } from '../../service/user.service';
import { CollabaratorService } from '../../service/collabarator.service';


@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {
  userName;
  ownerName;
  noteId
  users:User[];

  constructor( @Inject(MAT_DIALOG_DATA) public data: any,private userService:UserService,private collaboratorService:CollabaratorService,private matSnackBar:MatSnackBar) { }

  ngOnInit() {
    // this.userName=sessionStorage.uname;
    // this.ownerName=sessionStorage.response
    // this.getCollaboratorsList();
    // this.collaboratorService.autoRefresh$.subscribe(()=>{
    //     this.getCollaboratorsList();
    // });
    this. collaboratorService.getAllNotes()
    .subscribe((noteData => {
      this.data=noteData;
      this.users=noteData;
     // console.log(this.labels);
  }));
  }
  writeEmail(email){
    this.collaboratorService.addCollaborator(email,this.noteId).subscribe(data=>{

     this.matSnackBar.open(data.response,"OK",{duration:3000});
    })
 }

 getCollaboratorsList(){
   this.collaboratorService.getCollaboratorList(this.noteId).subscribe(data=>{
     console.log("collaborators list:",data.users);
     this.users=data.users;
   })
 }

 removeColab(userid){
   this.collaboratorService.removeCollaborator(this.noteId,userid).subscribe(data=>{
     this.matSnackBar.open(data.response,"OK",{duration:3000});
   })
 }

}
