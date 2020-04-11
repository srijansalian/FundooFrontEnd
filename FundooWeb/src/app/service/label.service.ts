import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { HttpService } from './http.service';
import { environment } from 'src/environments/environment';
import { HttpHeaders ,HttpClient } from '@angular/common/http';
import { Label } from '../model/label.model';

@Injectable({
  providedIn: 'root'
})
export class LabelService {

  private noteId = new Subject<any>();
  private labelList=new Subject<any>();
  private labelsNotes=new Subject<any>();
  private noteList=new Subject<any>();
  private _autoRefresh$ = new Subject();

  constructor(private httpservice: HttpService,private http: HttpClient) { }
  get autoRefresh$() {
    return this._autoRefresh$;
  }

  getNoteLabels(noteId:any){
    return this.httpservice.getRequest(`${environment.labelApiURL}/${environment.getlabel}?noteId=${noteId}`, { headers: new HttpHeaders().set('token', sessionStorage.token)});
  }
  getAllLabels(){
    return this.httpservice.getRequest(`${environment.labelApiURL}/${environment.getalllabels}`, { headers: new HttpHeaders().set('token', sessionStorage.token)});
  }
  getNotesByLabel(labelId){
    return this.httpservice.getRequest(`${environment.labelApiURL}/${environment.getNotesByLabelId}?labelId=${labelId}`,{headers:new HttpHeaders().set('token',sessionStorage.token)});
  }

  setNoteIdForLabel(message:any){
    this.noteId.next({labels:message});
}
getNoteIdForLabel(): Observable<any> {
  return this.noteId.asObservable();
}

setlabelsNotes(message:any){
  return this.labelsNotes.next({notes:message});
}
getlabelsNotes():Observable<any>{
  return this.labelsNotes.asObservable();
}

setLabelId(message:any){
  this.labelList.next({labels:message});
}
getLabelId(message:any):Observable<any>{
  return this.labelList.asObservable();
}
setNoteList(message:any){
  this.noteList.next({notes:message});
}
getNoteList(){
  return this.noteList.asObservable();
}

setLabelList(message:any){
  this.labelList.next({label:message});
}
getLabelList(){
return this.labelList.asObservable();
} 
createLabel(label){
  return this.httpservice.postRequest(`${environment.labelApiURL}/${environment.createlabel}`,label,{headers:new HttpHeaders().set('token',sessionStorage.token)});
  
}

deleteLabel(label){
  return this.httpservice.deleteRequest(`${environment.labelApiURL}/${environment.deletelabel}?labelId=${label}`,{headers:new HttpHeaders().set('token',sessionStorage.token)});
}
addLabel(noteId:any,labelId){
  return this.httpservice.postRequest(`${environment.labelApiURL}/${environment.addLabel}?labelId=${labelId}&noteId=${noteId}`,{},{headers:new HttpHeaders().set('token',sessionStorage.token)});
}
private _getLabelUrl:string='/assets/noteinfo/label.json';
  getAlllab():Observable<Label[]>
  {
   return this.http.get<Label[]>(this._getLabelUrl);

  }
  private tempNoteId:number;
  setNoteIdd(noteid){
    this.tempNoteId=noteid;
  }

  getNoteIdd(){
    return this.tempNoteId;
  }


}
