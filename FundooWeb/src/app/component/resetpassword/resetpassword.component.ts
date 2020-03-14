import { Component, OnInit } from '@angular/core';
import { FormControl, Validators,FormGroup, FormBuilder} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../service/user.service';
import { MatSnackBar } from '@angular/material';
import { Setpassword } from './../../model/setpassword.model';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  constructor(private userService:UserService,
    private route: ActivatedRoute,
    private snackBar:MatSnackBar) { }
    setPassword:Setpassword=new Setpassword();
    token:string;

  ngOnInit() {
    this.token = this.route.snapshot.paramMap.get("token");
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
  confirmpassword= new FormControl(null, 
    [Validators.required,
      Validators.minLength(8)
    ]);

    getConfirmPasswordError(){
      return this.password.hasError('required')?'Password required':
      this.password.hasError('minlength')? 'Enter minimum 8 ':
      ""
    }
    onSubmit(){
      if(this.password.value===this.confirmpassword.value){
      this.setPassword.password=this.password.value;
      this.setPassword.confirmPassword=this.confirmpassword.value;
      console.log("in reset",this.setPassword)

      this.userService.userSetPassword(this.setPassword,this.token).subscribe(  
        (response:any) =>{
           this.snackBar.open(response.message, "", {duration:3000})
        },
        error=> {
          this.snackBar.open(error.error.message, "", {duration:3000})
        }
       );
      }else{
        this.snackBar.open("Confirm Password and Password mismatch", "", {duration:3000})

      }
       
     }

}
