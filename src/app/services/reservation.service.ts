import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,HttpHeaders,HttpClientJsonpModule  } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient ) {
  }

  getReservationById(id:string):Observable<any>{
    return this.http.get('http://localhost:8080/reservation/'+ id);
  }
  getAllReservations():Observable<any>{
    return this.http.get('http://localhost:8080/reservation');
  }
  addReservation(reservation): Observable<any>{

    let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: headers });

    // console.log(options);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post('http://localhost:8080/reservation/add',reservation,httpOptions);

  }
  deleteReservation(id:number){
    return this.http.delete('http://localhost:8080/reservation/delete/'+id);
  }
  payReservation(id:number){
    return this.http.put('http://localhost:8080/reservation/pay/'+id,{});
  }
}
