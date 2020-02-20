import { Component, OnInit,Output, EventEmitter  } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent implements OnInit {


  minPrice:number= 0.00;
  maxPrice:number= 10000.00;
  minDate:string;
  maxDate:string;
  freePlaces:number;
  @Output() propertiesAreChanged:
   EventEmitter<{minPrice:number,maxPrice:number,minDate:string,maxDate:string,freePlaces:number}>=
  new EventEmitter<{minPrice:number,maxPrice:number,minDate:string,maxDate:string,freePlaces:number}>();

  constructor() {
  }

  ngOnInit() {
  }

  onChangeProperties():void{
    let minPrice=this.minPrice;
    let maxPrice = this.maxPrice;
    let minDate=this.minDate;
    let maxDate = this.maxDate;
    let freePlaces = this.freePlaces;
    this.propertiesAreChanged.emit({minPrice,maxPrice,minDate,maxDate,freePlaces});
  }

}
