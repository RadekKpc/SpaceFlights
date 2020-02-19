import { Component, OnInit } from '@angular/core';
import {FlightService} from '../services/flight.service'
import * as $ from 'jquery';
import {Router} from "@angular/router";

@Component({
  selector: 'app-flights-list',
  templateUrl: './flights-list.component.html',
  styleUrls: ['./flights-list.component.css']
})
export class FlightsListComponent implements OnInit {



  flights: Object;

  constructor(private flightService: FlightService,private router: Router) {
   }

  ngOnInit() {
    this.getFlights();
  //   $('.table > tbody > tr').click(function() {
  //     console.log("ssad");
  // });
//   $(document).ready(function() {

//     $('.clicable tr').click(function() {

//         let id = $(this).children()[0].innerHTML;
//     });

// });


    // this.flightService.getAllFlights().subscribe(flight => console.log(flight));
    // this.flightService.getFlightById(50).subscribe(flight => console.log(flight));
    // this.flightService.addFlight(this.flight).subscribe(flight => console.log(flight));
    // new Flight('2099-01-01','2100-01-01',12,100)).subscribe(flight => this.flights.push(flight)
    // this.flightService.deleteFlight(51).subscribe(flight => console.log(flight));
  }

   getFlights(){
     this.flightService.getAllFlights().subscribe(
       flights => {this.flights = flights; console.log(flights)}
     );
   }
   deleteFlight(id: number){
    this.flightService.deleteFlight(id).subscribe(response => console.log(response));
    // this.flights = [];
    // this.getFlights();
  }

  navigateToDetails(id){
    this.router.navigate(['/flight/details/'+id]);
  }
  // searchFlights({searchName,minSem,maxSem,minRating,maxRating,minEcts,maxEcts}){
  //   this.searchName = searchName;
  //   this.minSem = minSem;
  //   this.maxSem = maxSem;
  //   this.minRating = minRating;
  //   this.maxRating = maxRating;
  //   this.minEcts = minEcts;
  //   this.maxEcts = maxEcts;
  // }




}
