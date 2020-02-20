import { Component, OnInit } from '@angular/core';
import {FlightService} from '../services/flight.service'
import { ActivatedRoute } from '@angular/router';
import {ParticipantService} from '../services/participant.service';
import {Router} from "@angular/router";
import {Reservation} from '../data-structures/reservation';
import {ReservationService} from '../services/reservation.service';


@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.css']
})
export class ReservationDetailsComponent implements OnInit {

  respone: Object;
  reservation: Reservation;
  participant: Object;
  flight: Object;
  id: any;
  private sub: any;
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private flightService:FlightService,private participantService:ParticipantService,private reservationService:ReservationService) {

  }

  getReservation(){
    this.reservationService.getReservationById(this.id).subscribe(
      reservation => {this.reservation = reservation; console.log(reservation)
        this.getParticipant();
        this.getFlight();
      }
    );
  }

  getParticipant(){
    this.participantService.getParticipantById(this.reservation.participantID).subscribe(
      participant => {this.participant = participant; console.log(participant)}
    );
  }

  getFlight(){
    this.flightService.getFlightById(this.reservation.flightID).subscribe(
      flight => {this.flight = flight; console.log(flight)}
    );
  }
  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params =>{ this.id =+ params['id']});
    this.getReservation();
  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }
  delteReservation(id: number){
    this.reservationService.deleteReservation(id).subscribe(response => console.log(response));
    this.router.navigate(['/reservation/list']);
  }
  navigateToDetailsParticipant(id:number){
    this.router.navigate(['/participant/details/'+id]);
  }
  navigateToDetailsFlight(id:number){
    this.router.navigate(['/flight/details/'+id]);
  }
  paidReservation(id:number){
    // this.reservationService.
  }

}
