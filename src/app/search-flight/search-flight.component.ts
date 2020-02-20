import { Component, OnInit,Output, EventEmitter  } from '@angular/core';

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
  @Output() propertiesAreChanged:
   EventEmitter<{minPrice:number,maxPrice:number,minDate:string,maxDate:string}>=
  new EventEmitter<{minPrice:number,maxPrice:number,minDate:string,maxDate:string}>();

  constructor() {
  }

  ngOnInit() {
  }

  onChangeProperties():void{
    let minPrice=this.minPrice;
    let maxPrice = this.maxPrice;
    let minDate=this.minDate;
    let maxDate = this.maxDate;
    this.propertiesAreChanged.emit({minPrice,maxPrice,minDate,maxDate});
  }

}
