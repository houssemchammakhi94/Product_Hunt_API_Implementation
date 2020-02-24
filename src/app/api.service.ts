import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from 'environments/environment'

@Injectable()
export class ApiService {

  token = environment.tokken;
  url: string = 'https://api.producthunt.com/v1/posts?day=2017-09-13';
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    
    return this.http.get<any>(this.url, {
            headers :
            {
              "Authorization":["Bearer "+this.token+ ""]
            }
        })
  }

  
}
