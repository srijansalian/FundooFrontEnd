import { Component, OnInit } from '@angular/core';
import { Validators,FormControl } from '@angular/forms';
import { Forgotpassword } from '../../model/forgotpassword.model';
import { UserService } from '../../service/user.service'
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {

  constructor( private userService:UserService,
    private snackBar:MatSnackBar) { }

    forgotPassword:Forgotpassword=new Forgotpassword();

  ngOnInit() {
  }
  emailId = new FormControl('',[
    Validators.required,
    Validators.email
  ]);

  getEmailError(){
    return this.emailId.hasError('required')?'Email required':
    this.emailId.hasError('email')?'input format not proper':"";
  }

 
    onSubmit(){
      this.forgotPassword.email=this.emailId.value;
      
    
      this.userService.userForgotPassword(this.forgotPassword).subscribe(  
        (response:any) =>{
         console.log("hello")
         localStorage.setItem('token',response.token);
         },
        error=> {
          console.log("error")
        }
      );
    
      }
  

}
