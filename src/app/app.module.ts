import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FlightService} from './services/flight.service';
import { HttpClientModule } from '@angular/common/http';
import { FlightsListComponent } from './flights-list/flights-list.component';
@NgModule({
  declarations: [
    AppComponent,
    FlightsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [FlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
