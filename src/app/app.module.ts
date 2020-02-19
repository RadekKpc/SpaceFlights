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
import { FlightComponent } from './flight/flight.component';
import { ParticipantListComponent } from './participant-list/participant-list.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddParticipantComponent } from './add-participant/add-participant.component';
import { AddReservationComponent } from './add-reservation/add-reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightsListComponent,
    FlightComponent,
    ParticipantListComponent,
    ReservationListComponent,
    AddFlightComponent,
    AddParticipantComponent,
    AddReservationComponent
  ],
  imports: [
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
