import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import {Flight} from '../data-structures/flight'
@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  @Input() flight: Flight;
  @Output() flightIsDeleted: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}


  ngOnInit() {
  }
  onDelete(id: number){
    this.flightIsDeleted.emit(id);
  }

}
