import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse ,HttpHeaders} from '@angular/common/http';
import {HttpService} from './http.service';
import {User} from './../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient,private httpservice:HttpService) { }
}
