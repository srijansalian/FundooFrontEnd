import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { HttpService } from './http.service';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LabelService {

  private noteId = new Subject<any>();
  private labelList=new Subject<any>();
  private labelsNotes=new Subject<any>();
  private noteList=new Subject<any>();

  constructor(private httpservice: HttpService) { }

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



}