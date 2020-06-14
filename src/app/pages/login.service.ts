import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user.model';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http: HttpClient) {
  }

  validateCridentials(login: any,password:any): Observable<any> {
    return this.http.get<any>('http://localhost:8080/users/'+login + '&' + password );
  }


  saveUser(user: User): Observable<any> {
    return this.http.post<any>('http://localhost:8080/users', user);
  }
}
