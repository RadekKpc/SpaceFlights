import {Pipe,PipeTransform} from '@angular/core'
import {Flight} from '../data-structures/flight'

@Pipe({ name: 'valuesPipe' })
export class ValuesPipe implements PipeTransform {
    transform(flights: {key,value:Flight}[]): Flight[]{

        if(!flights)return [];
        return flights.map(course => {
            return course.value;
        });
    }
}