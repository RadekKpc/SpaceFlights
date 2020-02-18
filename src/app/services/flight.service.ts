import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,HttpHeaders,HttpClientJsonpModule  } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Flight} from '../data-structures/flight'
@Injectable({
  providedIn: 'root'
})
export class FlightService {

  postId;
  constructor(private http: HttpClient ) {
  }

  getFlightById():Observable<any>{
    return this.http.get('http://localhost:8080/flight/10');
  }
  getAllFlights():Observable<any>{
    return this.http.get('http://localhost:8080/flight');
  }
  addFlight(flight): Observable<Flight>{

    let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: headers });

    console.log({
      startDate:'2099-01-01',
      endDate:'2100-01-01',
      participantCapacity:12,
      price:100
  });
    // console.log(options);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<Flight>('http://localhost:8080/flight/add', {
      startDate:'2099-01-01',
      endDate:'2100-01-01',
      participantCapacity:12,
      price:100
  },httpOptions);

  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
  // private extractData(res: Response) {
  //   let body = res.json();
  //   console.log(body);
  //   return body.data || { };
  // }
  // private handleError (error: any) {
  //   console.error(error);
  //   return Observable.throw(error.json().error || 'Server error');
  // }

}
