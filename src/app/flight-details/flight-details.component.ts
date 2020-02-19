import { Component, OnInit } from '@angular/core';
import {FlightService} from '../services/flight.service'
import { ActivatedRoute } from '@angular/router';
import {ParticipantService} from '../services/participant.service'
import {Router} from "@angular/router";

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {

  respone: Object;
  flight: Object;
  paidParticipants: Object;
  unpaidParticipants: Object;
  id: any;
  private sub: any;
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private flightService:FlightService,private participantService:ParticipantService) {

  }

  getFlight(){
    this.flightService.getFlightById(this.id).subscribe(
      flight => {this.flight = flight; console.log(flight)}
    );
  }
  getPaidParticipants(){
    this.participantService.getParticipantsByFlightID(this.id,'1').subscribe(
      participants => {this.paidParticipants = participants; console.log(participants)}
    );
  }
  getUnpaidParticipants(){
    this.participantService.getParticipantsByFlightID(this.id,'0').subscribe(
      participants => {this.unpaidParticipants = participants; console.log(participants)}
    );
  }
  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params =>{ this.id =+ params['id']});
    this.getFlight();
    this.getPaidParticipants();
    this.getUnpaidParticipants();
  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }
  deleteFlight(id: number){
    this.flightService.deleteFlight(id).subscribe(response => console.log(response));
    this.router.navigate(['/flight/list']);
  }
}
