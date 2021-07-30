import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SharedFormService {

  constructor() { }

  buildUserForm(result: User) {

    return new FormGroup({
      firstName: new FormControl(result['firstName'], [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
      lastName: new FormControl(result['lastName'], [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
      gender: new FormControl(result['gender']),
      pId: new FormControl(result['pId'], [Validators.required, Validators.pattern("^[0-9]{11}$")]),
      mobNum: new FormControl(result['mobNum'], [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{9}$")]),
      legalAddressCountry: new FormControl(result['legalAddressCountry'], Validators.required),
      legalAddressCity: new FormControl(result['legalAddressCity'], Validators.required),
      legalAddressAddress: new FormControl(result['legalAddressAddress'], Validators.required),
      actualAddressCountry: new FormControl(result['actualAddressCountry'], Validators.required),
      actualAddressCity: new FormControl(result['actualAddressCity'], Validators.required),
      actualAddressAddress: new FormControl(result['actualAddressAddress'], Validators.required),
    })
  }


}
