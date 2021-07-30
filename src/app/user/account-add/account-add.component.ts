import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserAccountService } from '../service/users-account.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-account-add',
  templateUrl: './account-add.component.html',
  styleUrls: ['./account-add.component.scss']
})
export class AccountAddComponent implements OnInit {
  id = this.router.snapshot.params.id
  accountForm = new FormGroup({
    uId: new FormControl(this.id),
    accountType: new FormControl('', [Validators.required]),
    currency: new FormControl('', [Validators.required]),
    accountStatus: new FormControl('', [Validators.required]),
  });
  currencyOptions = ["GEL","USD","EUR", "RUB"];
  accountTypeOptions=["Current","Savings","Accumulator"];
  accountStatusOptions=["Active","Closed"]

  constructor(
    private http: UserAccountService,
    private router: ActivatedRoute,
    private _location: Location
    ) { }

  ngOnInit(): void {
  }

  addAccount() {
    this.http.addAccount(this.accountForm.value).subscribe((res) => {
      console.log(res);
    })
    this._location.back();
  }

}
