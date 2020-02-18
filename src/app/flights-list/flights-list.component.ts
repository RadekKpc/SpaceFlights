import { Component, OnInit } from '@angular/core';
import {FlightService} from '../services/flight.service'
import {Flight} from '../data-structures/flight'

@Component({
  selector: 'app-flights-list',
  templateUrl: './flights-list.component.html',
  styleUrls: ['./flights-list.component.css']
})
export class FlightsListComponent implements OnInit {

  flights: Array<Flight>
  flight: {
    startDate:'2099-01-01',
    endDate:'2100-01-01',
    participantCapacity:12,
    price:100
    };
  f:any;
  constructor(private flightService: FlightService) {
   }


  ngOnInit() {
    this.flightService.getFlightById().subscribe(flight => console.log(flight));
    // this.flightService.addFlight(this.flight);
    // new Flight('2099-01-01','2100-01-01',12,100)).subscribe(flight => this.flights.push(flight)
  }

}
