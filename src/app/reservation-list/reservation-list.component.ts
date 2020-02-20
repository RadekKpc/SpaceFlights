import { Component, OnInit } from '@angular/core';
import {ReservationService} from '../services/reservation.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {

  reservations: Object;

  constructor(private router:Router,private reservationService: ReservationService) { }

  ngOnInit() {
    this.getParticipants();
  }

  getParticipants(){
    this.reservationService.getAllReservations().subscribe(
      reservations => {this.reservations = reservations; console.log(reservations)}
    );
  }
  navigateToDetails(id){
    this.router.navigate(['/reservation/details/'+id]);
  }
}
