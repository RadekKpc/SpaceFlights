import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators,AbstractControl} from '@angular/forms';
import {ReservationService} from '../services/reservation.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent implements OnInit {

  response: Object;
  constructor(private formBuilder: FormBuilder,private reservationService:ReservationService,private router: Router) { }

  ngOnInit() :void{

    this.modelForm = this.formBuilder.group({
      isPaid: ['Not Known'],
      flightID: ['',Validators.required],
      participantID: ['',Validators.required]
    });

    this.modelForm.valueChanges.subscribe((value) => {
      this.onControlValueChanged();
    });

    this.onControlValueChanged();

  }

  modelForm : FormGroup;
  private validationMessages = {

    flightID: {
      required: 'flight ID is required'
    },
    participantID:{
      required: 'participant ID is required'
    },
    isPaid: {
      required: '"Is paid?" field is required'
    },
  }
  formErrors = {
    flightID: '',
    participantID: '',
    startDate: '',
    endDate: '',
    isPaid: '',
  }

  onControlValueChanged() {
    const form = this.modelForm;

    for (let field in this.formErrors) {
      this.formErrors[field] = '';
      let control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const validationMessages = this.validationMessages[field];

        for (const key in control.errors) {
          this.formErrors[field] += validationMessages[key] + ' ';
        }
      }
    }
  }

  onSubmit(modelForm){

    let reservation = {
      'id' : 0,
      'flightID':modelForm.value.flightID,
      'participantID':modelForm.value.participantID,
      'startDate':"",
      'endDate':"",
      'isPaid': modelForm.value.isPaid,
      };
      console.log(reservation);
    this.reservationService.addReservation(reservation).subscribe(
      response => {this.response = response; console.log(response)}
    );
  }
  navigateToParticipantList(){
    this.router.navigate(['/participant/list']);
  }
  navigateToFlightList(){
    this.router.navigate(['/flight/list']);
  }

}
