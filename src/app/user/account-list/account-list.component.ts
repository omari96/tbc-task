import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Account } from '../models/account.model';
import { UserAccountService } from '../service/users-account.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {
  accountFormHeader: string[] = ['uId', 'accountType', 'currency', 'accountStatus'];
  accountData: Account[] = [];
  id = this.router.snapshot.params.id

  constructor(
    private http: UserAccountService,
    private router: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.fillAccount()
  }

  fillAccount() {
    this.http.getAccounts(this.id).subscribe((res) => {
      this.accountData = res
    })
  }

  deleteAccount(id: Account) {
    this.http.deleteAccount(id).subscribe(() => {
      this.fillAccount();
    })
  }
}
