import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

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
   UserName = new FormControl('',[
    Validators.required,
    Validators.pattern('[a-zA-Z]*')
  ]
  )
  errorUserNameMessage(){
    return this.UserName.hasError('required')? "The Field Can't be Empty":
    this.UserName.hasError('pattern')? "The Field must contain alphabet":
    "";
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

}
