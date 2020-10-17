import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { QueryService } from '../query-service/query.service';

@Injectable({
  providedIn: "root"
})

export class EndpointsService {
  constructor(private query: QueryService) { 
    
  }
  
 public getEltizamData(id: string): Observable<any> {
    this.query.setURI(`EltizamInfoData?q=${id}`);
    this.query.setHeaders();
    return this.query.get();
  }
   
}
