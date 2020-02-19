import { Component, OnInit } from '@angular/core';
import {ParticipantService} from '../services/participant.service'
@Component({
  selector: 'app-participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.css']
})
export class ParticipantListComponent implements OnInit {

  participants: Object;

  constructor(private participantService: ParticipantService) { }

  ngOnInit() {
    this.getParticipants();
  }

  getParticipants(){
    this.participantService.getAllParticipants().subscribe(
      participants => {this.participants = participants; console.log(participants)}
    );
  }
}
