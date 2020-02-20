import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators,AbstractControl} from '@angular/forms';
import {ParticipantService} from '../services/participant.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-add-participant',
  templateUrl: './add-participant.component.html',
  styleUrls: ['./add-participant.component.css']
})
export class AddParticipantComponent implements OnInit {

  response: Object;
  constructor(private formBuilder: FormBuilder,private participantService:ParticipantService,private router:Router) { }

  ngOnInit() :void{

    this.modelForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['',Validators.required],
      gender: ['Not Known'],
      country: ['',Validators.required],
      birthDate: ['',Validators.required]
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
    surname: {
      required: 'End date is required',
    },
    country: {
      required: 'Price is required'
    },
    birthDate: {
      required: 'Price is required'
    },
  }
  formErrors = {
    name: '',
    surname: '',
    country: '',
    gender: '',
    birthDate: '',
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

    let participant = {
      'id' : 0,
      'name':modelForm.value.name,
      'surname':modelForm.value.surname,
      'gender':modelForm.value.gender,
      'country':modelForm.value.country,
      'birthDate':modelForm.value.birthDate,
      'notes': ''
      };
      console.log(participant);
    this.participantService.addParticipant(participant).subscribe(
      response => {this.response = response; console.log(response)}
    );
    this.router.navigate(['/participant/list']);
  }

}
