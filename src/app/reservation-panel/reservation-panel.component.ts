import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation-panel',
  templateUrl: './reservation-panel.component.html',
  styleUrls: ['./reservation-panel.component.css']
})
export class ReservationPanelComponent implements OnInit {

  reservation: boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
