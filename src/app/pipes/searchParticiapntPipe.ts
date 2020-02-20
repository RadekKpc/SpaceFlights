import {Pipe,PipeTransform} from '@angular/core'
import {Participant} from '../data-structures/participant'

@Pipe({ name: 'searchNamePipe' })
export class searchNamePipe implements PipeTransform {
    transform(participants: Participant[], name: string): Participant[]{

        if(!participants)return [];
        if (!name)return participants;

        name = name.toLowerCase();

        return participants.filter(participant => {
            console.log(participant.name)
            return (participant.name.toLowerCase().includes(name));
        });
    }
}
@Pipe({ name: 'searchSurenamePipe' })
export class searchSurenamePipe implements PipeTransform {
    transform(participants: Participant[], surname: string): Participant[]{

        if(!participants)return [];
        if (!surname)return participants;

        surname = surname.toLowerCase();

        return participants.filter(participant => {
            console.log(participant.surname)
            return (participant.surname.toLowerCase().includes(surname));
        });
    }
}



