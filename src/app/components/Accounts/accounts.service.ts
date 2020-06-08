import {Injectable} from '@angular/core';
import {Service} from '../../common/service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AccountsService extends Service {
  /**
   * Creates a new NameListService with the injected Http.
   * @param {Http} http - The injected Http.
   * @param configService
   * @constructor
   */
  constructor(private http: HttpClient) {
    super();
  }

  getCompte(codeCompte: any): Observable<any> {
    return this.http.get<any>('http://localhost:8080/comptes/' + codeCompte);
  }

  verser(codeCompte, montant: any): Observable<any> {
    // @ts-ignore
    return this.http.put<any>('http://localhost:8080/comptes/verser/' + codeCompte + '&' + montant );
  }

  retrait(codeCompte, montant: any): Observable<any> {
    // @ts-ignore
    return this.http.put<any>('http://localhost:8080/comptes/retirer/' + codeCompte + '&' + montant);
  }

  Virement(codeCompte1, codeCompte2, montant: any): Observable<any> {
    // @ts-ignore
    return this.http.put<any>('http://localhost:8080/comptes/virement/' + codeCompte1 + '&' + codeCompte2 + '&' + montant);
  }

}
