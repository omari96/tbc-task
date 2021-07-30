import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SharedFormService } from '../service/shared-form.service';
import { UserService } from '../service/user.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  formGroup: FormGroup

  constructor(
    private userService: UserService,
    private formService: SharedFormService,
    private _location: Location
  ) { }



  ngOnInit(): void {
    this.formGroup = this.formService.buildUserForm({
      id: null,
      firstName: '',
      lastName: '',
      gender: 'men',
      mobNum: null,
      pId: null,
      legalAddressCountry: '',
      legalAddressCity: '',
      legalAddressAddress: '',
      actualAddressCountry: '',
      actualAddressCity: '',
      actualAddressAddress: '',
    });
  }

  addUser() {
    this.userService.addUser(this.formGroup.value).subscribe((res) => {
      console.log(res);
    })
    this._location.back();
  }

}
