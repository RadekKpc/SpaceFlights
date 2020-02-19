import { Component, OnInit } from '@angular/core';
import {ReservationService} from '../services/reservation.service'
@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {

  reservations: Object;

  constructor(private reservationService: ReservationService) { }

  ngOnInit() {
    this.getParticipants();
  }

  getParticipants(){
    this.reservationService.getAllReservations().subscribe(
      reservations => {this.reservations = reservations; console.log(reservations)}
    );
  }

}
