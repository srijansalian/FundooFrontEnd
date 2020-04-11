import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Subject, Observable} from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Note } from '../model/note.model';

const httpOptions = 
              {headers: new HttpHeaders({"Content-Type":"application/json",
                                        "jwt-token":localStorage.getItem("jwt-token")
                                        })};

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private _autoRefresh$ = new Subject();
  private searchNoteData=new Subject<any>();
  notesApiURL=environment.notesApiURL;
  private token=(localStorage.token)
  private Title=new Subject<any>();
  private view=new Subject<any>();
  private httpOptions={headers:new HttpHeaders({'content-type':'application/json'})};

  get autoRefresh$() {
    return this._autoRefresh$;
  }

  constructor(private httpService:HttpService,private http: HttpClient) { }

  createNotes(note:any):Observable<any>
  {
    return this.httpService.postRequest(this.notesApiURL+environment.createnote,note,{headers:new HttpHeaders({"token":localStorage.token})});
  }
  getAllNote(): Observable<any> { 
       
    return this.httpService.getRequest(this.notesApiURL+environment.getAllNotes,{headers:new HttpHeaders({'token':this.token})});
   
}
  getPinnedAllNote(): Observable<any> { 
        
      return this.httpService.getRequest(this.notesApiURL+environment.getPinNote,{headers:new HttpHeaders({"token":localStorage.token})});
      
  }
  pinNote(note:any): Observable<any> { 
      return this.httpService.getRequest(this.notesApiURL+environment.pinNote+note.id,{headers:new HttpHeaders({"token":localStorage.token})});
      
  } 
  private _getNotesUrl:string='/assets/noteinfo/noteinfo.json';
  getAllNotes():Observable<Note[]>
  {
   return this.http.get<Note[]>(this._getNotesUrl);
   //  return this._httpService.getRequest(this._getNotesUrl);
   //  return this._httpService.getRequest(this.noteApiUrl+this.getAllNotesUrl);
  }
  moveToTrash(noteId:any){
    return this.httpService.putRequest(this.notesApiURL+environment.trashNote+noteId,{},{headers:new HttpHeaders({'token':localStorage.token})});
  }

  updateNotes(note: any) {
    return this.httpService.putRequest(this.notesApiURL+environment.updateNote, note, { headers: new HttpHeaders().set('token', sessionStorage.token) });
  }
  addColor(noteId,color){
   
    return this.httpService.putRequest(`${environment.notesApiURL}/${environment.addcolor}?noteId=${noteId}&color=${color}`,{}, { headers: new HttpHeaders().set('token', sessionStorage.token) });
  }
  moveToArchiveNote(noteId: any) {
    return this.httpService.putRequest(`${environment.notesApiURL}/${environment.archiveNote}?noteId=${noteId}`, {}, { headers: new HttpHeaders().set('token', sessionStorage.token) });
  }
  
  setSearchNoteData(message:any){
    return this.searchNoteData.next({notes:message});
  }
  getSearchNoteData():Observable<any>{
    return this.searchNoteData.asObservable();
  }
  setView(data:any){
    console.log('Service set ');
    
   this.view.next({view:data});
   console.log('data ',this.view);
   
 }

 getView():Observable<any>{
   console.log('Service get');
   return this.view.asObservable();
 }
  
}

