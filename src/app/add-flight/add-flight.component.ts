import { Component, OnInit } from '@angular/core';
import {FlightService} from '../services/flight.service'
import {FormBuilder, FormGroup, Validators,AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {

  response: Object;
  constructor(private formBuilder: FormBuilder,private flightService: FlightService) { }

  ngOnInit() :void{

    this.modelForm = this.formBuilder.group({
      startDate: ['', Validators.required],
      endDate: ['',Validators.required],
      participantCapacity: [0.0,Validators.required],
      price: [0.00,Validators.required],
    });

    this.modelForm.valueChanges.subscribe((value) => {
      this.onControlValueChanged();
    });

    this.onControlValueChanged();

  }

  modelForm : FormGroup;
  private validationMessages = {
    startDate: {
      required: 'Begin date is required'
    },
    endDate: {
      required: 'End date is required',
    },
    participantCapacity: {
      required: 'Max participants is required'
    },
    price: {
      required: 'Price is required'
    }
  }
  formErrors = {
    startDate: '',
    endDate: '',
    participantCapacity: '',
    price: '',
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

    let flight = {
      'id' : 0,
      'startDate':modelForm.value.startDate,
      'endDate':modelForm.value.endDate,
      'participantCapacity':modelForm.value.participantCapacity,
      'price':modelForm.value.price
      };
    this.flightService.addFlight(flight).subscribe(
      response => {this.response = response; console.log(response)}
    );
  }
}
