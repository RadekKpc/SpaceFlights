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
  freePlaces: Object;
  minPrice:number;
  maxPrice:number;
  minDate:string;
  maxDate:string;
  freePlacesSearch: number;

  constructor(private flightService: FlightService,private router: Router) {
   }

  ngOnInit() {
    this.freePlaces = {};
    this.getFlights();

  }

   getFlights(){
     this.flightService.getAllFlights().subscribe(
       flights => {
         this.flights = flights;
        console.log(flights);
        this.getFreePlaces();
        });
   }


   getFreePlaces(){
     this.flightService.getFreePlaces().subscribe(freePlaces =>
      {freePlaces.forEach(f => {
        this.freePlaces[f.id]=f.freePlaces;
      });
         console.log(this.freePlaces)});
   }

  navigateToDetails(id){
    this.router.navigate(['/flight/details/'+id]);
  }


  searchFlight({minPrice,maxPrice,minDate,maxDate,freePlaces}){
    this.minPrice = minPrice;
    this.maxPrice = maxPrice;
    this.minDate = minDate;
    this.maxDate = maxDate;
    this.freePlacesSearch = freePlaces;
  }




}
