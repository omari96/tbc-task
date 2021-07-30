import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user.model';
import { SharedFormService } from '../service/shared-form.service';
import { UserService } from '../service/user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  formGroup: FormGroup
  id = this.router.snapshot.params.id

  constructor(
    private http: UserService,
    private formService: SharedFormService,
    private router: ActivatedRoute,
    private _location: Location
  ) { }

  ngOnInit(): void {

    this.detailUser(this.id)
  }

  UpdateUser() {
    const formData: User = this.formGroup.value;
    const user: User = {
      id: formData.id,
      firstName: formData.firstName,
      lastName: formData.lastName,
      gender: formData.gender,
      mobNum: formData.mobNum,
      pId: formData.pId,
      legalAddressCountry: formData.legalAddressCountry,
      legalAddressCity: formData.legalAddressCity,
      legalAddressAddress: formData.legalAddressAddress,
      actualAddressCountry: formData.actualAddressCountry,
      actualAddressCity: formData.actualAddressCity,
      actualAddressAddress: formData.actualAddressAddress,
    }
    this.http.updateData(this.router.snapshot.params.id, user).subscribe((res) =>
      console.log(res)
    )
    this._location.back();
  }

  detailUser(id: number) {
    this.http.getCurrentData(id).subscribe((result: User) => {
      this.formGroup = this.formService.buildUserForm(result)
    })
  }
}
