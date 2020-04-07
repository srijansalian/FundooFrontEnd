import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public postRequest( url:any,data:any,head:any):any{
    return this.http.post(url,data,head); 
  }
  public putRequest(url:any,data:any,head:any):any{
    return this.http.put(url,data,head);
  }
  // public deleteRequest(url:any):any{
  //   return this.http.delete(url);
    
  // }
  public getRequest(url: any, options: any): Observable<any> {
    return this.http.get(url, options);
  }
  public deleteRequest(url: any, options: any):Observable<any>{
    return this.http.delete(url, options);
  }
  
}
