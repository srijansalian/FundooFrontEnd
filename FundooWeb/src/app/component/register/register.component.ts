import { Component, OnInit } from '@angular/core';
import { FormControl, Validators,FormGroup, FormBuilder} from '@angular/forms';
import { User } from '../../model/user.model';
import { MatSnackBar } from '@angular/material';
import { TryCatchStmt } from '@angular/compiler';
import { UserService } from '../../service/user.service';
import { error } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user:User=new User();

  constructor(
    private userService:UserService,
    private snackBar:MatSnackBar,
    private router:Router) { }

  ngOnInit() {
  }
  mobilenumber = new FormControl('',[
    Validators.required,
    Validators.pattern('[0-9]{10,10}')
  ]
  )

  errorMobileNumberMessage(){
    return this.mobilenumber.hasError('required')? "The Field Can't be Empty":
    this.mobilenumber.hasError('pattern')? "Enter 10 Digits":
    "";
   }
   name = new FormControl('',[
    Validators.required,
    Validators.pattern('[a-zA-Z]*')
  ]
  )
  errorUserNameMessage(){
    return this.name.hasError('required')? "The Field Can't be Empty":
    this.name.hasError('pattern')? "The Field must contain alphabet":
    "";
   }

   email = new FormControl('',[
    Validators.required,
    Validators.email
  ]);

  getEmailError(){
    return this.email.hasError('required')?'Email required':
    this.email.hasError('email')?'input format not proper':"";
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
  confirmPassword= new FormControl(null, 
    [Validators.required,
      Validators.minLength(8)
    ]);

    getConfirmPasswordError(){
      return this.password.hasError('required')?'Password required':
      this.password.hasError('minlength')? 'Enter minimum 8 ':
      ""
    }

    onSubmit(){
      try{
        if(this.password.value===this.confirmPassword.value){
          this.user.password=this.password.value;
          this.user.confirmpassword=this.confirmPassword.value;
          this.user.name=this.name.value;
          this.user.mobilenumber=this.mobilenumber.value;
          this.user.email=this.email.value;

          this.userService.userRegistration(this.user).subscribe(
            (response:any) =>{
              this.router.navigate(["/login"]);
              this.snackBar.open(response.message, "Ok", {duration:3000})
           },
           error=> {
             this.snackBar.open(error.error.message, "Registration Not Possiable", {duration:3000})
           }
          );
        }else{
          throw new error;

        }
        }catch(error){
         this.snackBar.open("Please Enter the password anf confirm password", "", {duration:3000})

          



        }
      }
    }


