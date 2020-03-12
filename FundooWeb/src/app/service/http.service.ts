import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  public deleteRequest(url:any):any{
    return this.http.delete(url);
    
  }
  public getRequest(url:any):any{
    return this.http.get(url);

  }
}
