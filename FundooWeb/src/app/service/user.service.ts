import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment'
import { HttpClient, HttpHeaderResponse ,HttpHeaders} from '@angular/common/http';
import {HttpService} from './http.service';
import { Observable, Subject } from 'rxjs';
import {User} from './../model/user.model';
import { Login } from '../model/login.model';
import { Forgotpassword } from '../model/forgotpassword.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userApiUrl=environment.userApiURL;

  private httpOtions={
    headers: new HttpHeaders ({'content-type':'application/json'})
    };

  constructor( private httpService:HttpService) { }

  // userRegistration(user:User):Observable<any>
  // {
  //   console.log("User Email",user.email);
  //   return this.httpservice.postRequest(this.userApiUrl+environment.registerURL,user,this.httpOtions);
  // }
  userRegistration(user:User)
  {
    return this.httpService.postRequest(this.userApiUrl+environment.registerURL,user,this.httpOtions);
  }
  userLogin(login:Login)
  {
    return this.httpService.postRequest(this.userApiUrl+environment.loginURL,login,this.httpOtions);
  }
  userForgotPassword(forgotP:Forgotpassword)
  {
    
    return this.httpService.postRequest(this.userApiUrl+environment.forgotpasswordURL,forgotP,this.httpOtions);
  }


  
}
