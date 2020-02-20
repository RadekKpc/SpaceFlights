import {Pipe,PipeTransform} from '@angular/core'
import {Flight} from '../data-structures/flight'

@Pipe({ name: 'searchPrice' })
export class searchPrice implements PipeTransform {
    transform(flights: Flight[], minPrice:number,maxPrice:number): Flight[]{

        if(!flights)return [];
        if(!minPrice)minPrice=0.00;
        if(!maxPrice)maxPrice=99999999.00;

        return flights.filter(flight => {
            return (flight.price>=minPrice && flight.price<=maxPrice);
        });
    }
}

@Pipe({ name: 'searchDate' })
export class searchDate implements PipeTransform {
    transform(flights: Flight[], minDate:string,maxDate:string): Flight[]{

        if(!flights)return [];
        if(!minDate)minDate="";
        if(!maxDate)maxDate="";

        return flights.filter(flight => {
            return (true);
        });
    }
}