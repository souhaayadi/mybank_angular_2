import {Injectable} from '@angular/core';
import {Service} from '../../common/service';
import {HttpClient} from '@angular/common/http';

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
}
