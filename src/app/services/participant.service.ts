import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,HttpHeaders,HttpClientJsonpModule  } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  constructor(private http: HttpClient ) {
  }

  getParticipantById(id:string):Observable<any>{
    return this.http.get('http://localhost:8080/participant/'+id);
  }
  getAllParticipants():Observable<any>{
    return this.http.get('http://localhost:8080/participant');
  }
  addParticipant(participant): Observable<any>{

    let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: headers });

    // console.log(options);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    console.log(participant);
    return this.http.post('http://localhost:8080/participant/add',participant,httpOptions);

  }
  deleteParticipant(id:number){
    return this.http.delete('http://localhost:8080//participant/delete/'+id);
  }
  getParticipantsByFlightID(id:number,isPaid:String){
    return this.http.get('http://localhost:8080/participant-flight/'+isPaid+'/'+id);
  }
}
