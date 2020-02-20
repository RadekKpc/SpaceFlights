import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FlightService} from './services/flight.service';
import {ParticipantService} from './services/participant.service';
import {ReservationService} from './services/reservation.service';
import { HttpClientModule ,HttpClientJsonpModule } from '@angular/common/http';
import { FlightsListComponent } from './flights-list/flights-list.component';
import { ParticipantListComponent } from './participant-list/participant-list.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddParticipantComponent } from './add-participant/add-participant.component';
import { AddReservationComponent } from './add-reservation/add-reservation.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { ParticipantDetailsComponent } from './participant-details/participant-details.component';
import { ReservationDetailsComponent } from './reservation-details/reservation-details.component';
import {searchPrice,searchDate,searchFreePlaces} from './pipes/searchFlightPipe';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { ValuesPipe } from './Pipes/OnlyValuesPipe';
import { SearchParticipantComponent } from './search-participant/search-participant.component';
import {searchSurenamePipe,searchNamePipe} from './pipes/searchParticiapntPipe';
// import { ActivatedRoute } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    FlightsListComponent,
    ParticipantListComponent,
    ReservationListComponent,
    AddFlightComponent,
    AddParticipantComponent,
    AddReservationComponent,
    FlightDetailsComponent,
    ParticipantDetailsComponent,
    ReservationDetailsComponent,
    searchPrice,
    SearchFlightComponent,
    ValuesPipe,
    searchDate,
    searchFreePlaces,
    SearchParticipantComponent,
    searchSurenamePipe,
    searchNamePipe
  ],
  imports: [
    // ActivatedRoute,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FlightService,ParticipantService,ReservationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
