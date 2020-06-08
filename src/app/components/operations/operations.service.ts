import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  constructor(public http: HttpClient) { }

  getOperations( codeCompte: string, page: number, size: number): Observable<any> {
    return this.http.get<any> ('http://localhost:8080/comptes/listOperation?codeCompte=' + codeCompte + '&size=' + size + '&page=' + page);
  }
}
