import { Component, OnInit } from '@angular/core';
import {ParticipantService} from '../services/participant.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.css']
})
export class ParticipantListComponent implements OnInit {

  //properties to search
  name: string;
  surname: string;
  nameParametr = 'name';
  sureName = 'surename';
  //propertist to get from database
  participants: Object;

  constructor(private participantService: ParticipantService,private router:Router) { }

  ngOnInit() {
    this.getParticipants();
  }

  getParticipants(){
    this.participantService.getAllParticipants().subscribe(
      participants => {this.participants = participants; console.log(participants)}
    );
  }
  navigateToDetails(id){
    this.router.navigate(['/participant/details/'+id]);
  }
  searchParticipant({name,surname}){
    this.name = name;
    this.surname = surname;
  }
}
