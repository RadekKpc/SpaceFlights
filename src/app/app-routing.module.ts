import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FlightsListComponent} from './flights-list/flights-list.component'
import {ParticipantListComponent} from './participant-list/participant-list.component'
import {ReservationListComponent} from './reservation-list/reservation-list.component'
import {AddFlightComponent} from './add-flight/add-flight.component'
import {AddParticipantComponent} from './add-participant/add-participant.component'
import {AddReservationComponent} from './add-reservation/add-reservation.component'

const routes: Routes = [
  {path:'', redirectTo: '/reservation',pathMatch: 'full' },
  {path:'reservation',component: ReservationListComponent},
  {path:'reservation/add',component: AddReservationComponent},
  {path:'reservation/list',component: ReservationListComponent},
  {path:'flight/add',component: AddFlightComponent},
  {path:'flight/list',component: FlightsListComponent},
  {path: 'participant/list', component: ParticipantListComponent},
  {path: 'participant/add', component: AddParticipantComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
