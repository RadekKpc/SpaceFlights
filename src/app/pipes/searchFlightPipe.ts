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
        if(!minDate) return flights;
        if(!maxDate) return flights;

        return flights.filter(flight => {
            return  Date.parse(flight.startDate) >= Date.parse(minDate)
                && Date.parse(flight.endDate) <= Date.parse(maxDate);

        });
    }
}

//searching by free places
@Pipe({ name: 'searchFreePlaces' })
export class searchFreePlaces implements PipeTransform {
    transform(flights: Flight[], minFreePlaces:number, freePlaces:Object ): Flight[]{


        if(!flights)return [];
        if(!freePlaces)return flights;
        if(!minFreePlaces)return flights;

        return flights.filter(flight => {
            return ((freePlaces[flight.id]) ? freePlaces[flight.id] >= minFreePlaces : flight.participantCapacity >= minFreePlaces);
        });
    }


}