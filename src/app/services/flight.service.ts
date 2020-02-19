import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,HttpHeaders,HttpClientJsonpModule  } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import {Flight} from '../data-structures/flight'
@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http: HttpClient ) {
  }

  getFlightById(id:string):Observable<any>{
    return this.http.get('http://localhost:8080/flight/'+id);
  }
  getAllFlights():Observable<any>{
    return this.http.get('http://localhost:8080/flight');
  }
  addFlight(flight): Observable<any>{

    let headers = new Headers({ 'Content-Type': 'application/json' });

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    console.log(flight);
    return this.http.post('http://localhost:8080/flight/add',flight,httpOptions);

  }
  deleteFlight(id:number){
    console.log("deelting/"+id);
    return this.http.delete('http://localhost:8080//flight/delete/'+id);
  }
  getFlightIdByParticipant(id:number,isPaid:String){
    return this.http.get('http://localhost:8080/flight-participant/'+isPaid+'/'+id);
  }
}
