import { Component, OnInit } from '@angular/core';
import { Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

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

}
