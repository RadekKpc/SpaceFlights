import { Component, OnInit } from '@angular/core';
import {FlightService} from '../services/flight.service'
import { ActivatedRoute } from '@angular/router';
import {ParticipantService} from '../services/participant.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-participant-details',
  templateUrl: './participant-details.component.html',
  styleUrls: ['./participant-details.component.css']
})
export class ParticipantDetailsComponent implements OnInit {

  respone: Object;
  participant: Object;
  paidFlights: Object;
  unpaidFlights: Object;
  id: any;
  private sub: any;
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private flightService:FlightService,private participantService:ParticipantService) {

  }

  getParticipant(){
    this.participantService.getParticipantById(this.id).subscribe(
      participant => {this.participant = participant; console.log(participant)}
    );
  }
  //It means that participant took part in flight
  getPaidFlights(){
    this.flightService.getFlightIdByParticipant(this.id,'1').subscribe(
      flights => {this.paidFlights = flights; console.log(flights)}
    );
  }
  //Just reserved but not paid yet ,or unactive
  getUnpaidFlights(){
    this.flightService.getFlightIdByParticipant(this.id,'0').subscribe(
      flights => {this.unpaidFlights = flights; console.log(flights)}
    );
  }
  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params =>{ this.id =+ params['id']});
    this.getParticipant();
    this.getPaidFlights();
    this.getUnpaidFlights();
  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }
  delteParticipant(id: number){
    this.participantService.deleteParticipant(id).subscribe(response => console.log(response));
    this.router.navigate(['/participant/list']);
  }

}
