import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment'
import { HttpClient, HttpHeaderResponse ,HttpHeaders} from '@angular/common/http';
import {HttpService} from './http.service';
import { Observable, Subject } from 'rxjs';
import {User} from './../model/user.model';
import { Login } from '../model/login.model';
import { Forgotpassword } from '../model/forgotpassword.model';
import { Setpassword } from '../model/setpassword.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userApiUrl=environment.userApiURL;

  private httpOtions={
    headers: new HttpHeaders ({'content-type':'application/json'})
    };

  constructor( private httpService:HttpService) { }
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
  userSetPassword(setP:Setpassword,token:string)
  {
    console.log("set password",setP)
    return this.httpService.putRequest(this.userApiUrl+environment.setpassword+token,setP,{headers:new HttpHeaders().get(localStorage.token)});
  }


  
}
