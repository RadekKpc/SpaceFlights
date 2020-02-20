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
  }

   getFlights(){
     this.flightService.getAllFlights().subscribe(
       flights => {this.flights = flights; console.log(flights)}
     );
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
