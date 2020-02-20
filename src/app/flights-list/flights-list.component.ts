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

  minPrice:number;
  maxPrice:number;
  minDate:string;
  maxDate:string;

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


  searchCourses({minPrice,maxPrice,minDate,maxDate}){
    this.minPrice = minPrice;
    this.maxPrice = maxPrice;
    this.minDate = minDate;
    this.maxDate = maxDate;
  }




}
