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

}
