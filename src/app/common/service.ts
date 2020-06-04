import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';


/**
 * This class provides the Login service with methods to authenticate the user
 */
@Injectable()
export class Service {



    /**
     * Returns an Observable for the HTTP GET request for the JSON resource.
     * @return {string[]} The Observable for the HTTP request.
     */

    /**
     * Handle HTTP error
     */
    public handleError(error: any):any {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}

