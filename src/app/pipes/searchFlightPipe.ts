import {Pipe,PipeTransform} from '@angular/core'
import {Flight} from '../data-structures/flight'

//searching by prices
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

//searching by date and time
@Pipe({ name: 'searchDate' })
export class searchDate implements PipeTransform {
    transform(flights: Flight[], minDate:string,maxDate:string): Flight[]{

        if(!flights)return [];

        if(!minDate)
        return flights.filter(flight => {
            return (true);
        });

        if(!maxDate)
        return flights.filter(flight => {
            return (true);
        });

        console.log(minDate);
        console.log(maxDate);

        return flights.filter(flight => {
            return  Date.parse(flight.startDate) >= Date.parse(minDate)
                && Date.parse(flight.endDate) <= Date.parse(maxDate);

        });
    }
}