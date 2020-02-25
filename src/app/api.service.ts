import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from 'environments/environment'

@Injectable()
export class ApiService {

  token = environment.tokken;
  urlApi= environment.url_api;
  url: string;
  constructor(private http: HttpClient) {}

  getData(model): Observable<any> {
 
    this.url=this.urlApi+"posts?day="+model.year+"-"+model.month+"-"+model.day;
console.log(this.url);
    return this.http.get<any>(this.url, {
            headers :
            {
              "Authorization":["Bearer "+this.token+ ""]
            }
        })
  }

  
}
