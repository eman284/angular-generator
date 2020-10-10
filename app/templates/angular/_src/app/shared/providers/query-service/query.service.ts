import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  private URI: string;
  // private headers: HttpHeaders;

  constructor(private http: HttpClient) { }

  public setURI(endpoint: string): void {
    this.URI = environment.api;
    this.URI += endpoint;
  }

  public setHeaders(contentType?: string): void {
    // this.headers = new HttpHeaders({
    //   'Content-Type': `${contentType ? contentType : 'application/json'}`
    // })
  }

  public post(data: any): Observable<any> {
    return this.http.post(this.URI, data);
  }

  public get(): Observable<any> {
    console.log(this.URI)
    return this.http.get(this.URI,{
      observe: 'response'
    });
  }

  public put(data: any): Observable<any> {
    return this.http.put(this.URI, data);
  }

  public delete(number): Observable<any> {
    return this.http.delete(this.URI);
  }
}
