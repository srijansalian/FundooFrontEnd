import { Component, OnInit } from '@angular/core';
import { Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {

  constructor() { }

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

  

}
