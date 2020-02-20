import { Component, OnInit,Input} from '@angular/core';
import {FlightService} from '../services/flight.service'
import {Router} from "@angular/router";
import { ReservationService } from '../services/reservation.service';

@Component({
  selector: 'app-flights-list',
  templateUrl: './flights-list.component.html',
  styleUrls: ['./flights-list.component.css']
})


export class FlightsListComponent implements OnInit {

  @Input("reservation") reservation: boolean;
  flights: Object;
  freePlaces: Object;
  minPrice:number;
  maxPrice:number;
  minDate:string;
  maxDate:string;
  freePlacesSearch: number;
  result:any;

  constructor(private flightService: FlightService,private router: Router,private reservationService:ReservationService) {
   }

  ngOnInit() {
    this.freePlaces = {};
    if(this.reservation){
      this.getFreeFlights();
    }
    else{
    this.getFlights();

  }
    console.log(this.reservation);

  }

   getFlights(){
     this.flightService.getAllFlights().subscribe(
       flights => {
         this.flights = flights;
        console.log(flights);
        this.getFreePlaces();
        });
   }

   getFreeFlights(){
    this.flightService.getAllFreeFlights().subscribe(
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
  reserveFligt(flightID,participantID){
    this.reservationService.addReservation(
      {
        'id' : 0,
        'flightID':flightID,
        'participantID':participantID,
        'startDate':"",
        'endDate':"",
        'isPaid': 0,
        }
    ).subscribe(r => {this.result = r});
  }




}
