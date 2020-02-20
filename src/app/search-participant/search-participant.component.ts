import { Component, OnInit , Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-participant',
  templateUrl: './search-participant.component.html',
  styleUrls: ['./search-participant.component.css']
})
export class SearchParticipantComponent implements OnInit {


  name:string;
  surname:string;

  @Output() propertiesAreChanged:
   EventEmitter<{name:string,surname:string}>=
  new EventEmitter<{name:string,surname:string}>();

  constructor() {
  }

  ngOnInit() {
  }

  onChangeProperties():void{
    let name=this.name;
    let surname = this.surname;

    this.propertiesAreChanged.emit({name,surname});
  }

}
