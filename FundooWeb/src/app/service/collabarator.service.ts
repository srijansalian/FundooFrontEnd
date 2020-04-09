import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment'; 
import { tap } from 'rxjs/operators'; 
import { HttpService } from '../service/http.service';
import {User} from '../../app/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class CollabaratorService {

  private _autoRefresh$ = new Subject();

  get autoRefresh$() {
    return this._autoRefresh$;
  }


  constructor( private _http: HttpClient, private httpservice: HttpService ) { }

  private httpOtions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' })
  };

  addCollaborator(email: any, noteId: any): Observable<any> {
    return this.httpservice.postRequest(`${environment.userApiURL}/${environment.addCollabarator}?noteId=${noteId}&email=${email}`, {}, { headers: new HttpHeaders().set('token', sessionStorage.token) }).pipe(tap(()=>{
        this._autoRefresh$.next();
    }));
  }
  getCollaboratorList(noteId: any): Observable<any> {
    return this.httpservice.getRequest(`${environment.userApiURL}/${environment.getCollabarator}?noteId=${noteId}`, { headers: new HttpHeaders().set('token', sessionStorage.token) });
  }

  removeCollaborator(noteId,CollaboratorId):Observable<any>{
    return this.httpservice.deleteRequest(`${environment.userApiURL}/${environment.removeCollabarator}?userId=${CollaboratorId}&noteID=${noteId}`, { headers: new HttpHeaders().set('token', sessionStorage.token) }).pipe(tap(()=>{
      this._autoRefresh$.next();
    }));
  }
  private _getNotesUrl:string='/assets/noteinfo/colla.json';
  getAllNotes():Observable<User[]>
  {
   return this._http.get<User[]>(this._getNotesUrl);
   //  return this._httpService.getRequest(this._getNotesUrl);
   //  return this._httpService.getRequest(this.noteApiUrl+this.getAllNotesUrl);
  }
}
