import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Subject, Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const httpOptions = 
              {headers: new HttpHeaders({"Content-Type":"application/json",
                                        "jwt-token":localStorage.getItem("jwt-token")
                                        })};

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  notesApiURL=environment.notesApiURL;
  private Title=new Subject<any>();
  private httpOptions={headers:new HttpHeaders({'content-type':'application/json'})};

  constructor(private httpService:HttpService,private http: HttpClient) { }

  createNotes(note:any):Observable<any>
  {
    return this.httpService.postRequest(this.notesApiURL+environment.createnote,note,{headers:new HttpHeaders({"token":localStorage.token})});
  }
  NoteGetAll( ){
    return this.httpService.postRequest(this.notesApiURL+environment.getallnote, "",httpOptions);
     }   
}
