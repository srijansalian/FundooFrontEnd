import { Component, OnInit } from '@angular/core';
import { Validators,FormControl,FormGroup } from '@angular/forms';
import { Login } from '../../model/login.model';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login:Login=new Login();
  loginForm:FormGroup;

  constructor(  private userService:UserService,
    private snackBar:MatSnackBar,
    private router:Router) { }

  ngOnInit()  {
  }
  emailId = new FormControl('',[
    Validators.required,
    Validators.email
  ]);

  getEmailError(){
    return this.emailId.hasError('required')?'Email required':
    this.emailId.hasError('email')?'input format not proper':"";
  }
  password = new FormControl('',[
    Validators.required,
    Validators.minLength(8),

  ]);
  getPasswordError(){
    return this.password.hasError('required')?'Password required':
    this.password.hasError('minlength')? 'Enter minimum 8 ':
    ""
  }

  onSubmit(){
    this.login.email=this.emailId.value;
    this.login.password=this.password.value;

    this.userService.userLogin(this.login).subscribe(
      (response:any) =>{
        console.log(response.message)
         if(response.statuscode===200){
          
           localStorage.setItem('token',response.token);
          //  this.router.navigateByUrl('home');
          this.router.navigate(["/dashboard"]);
         }else{

           this.snackBar.open('Login Fail', "", {duration:3000})
         }
        
      },
      
      (error:any)=> {
       console.log(error.error.statusMessage)
      }
     );
    
  }



}
