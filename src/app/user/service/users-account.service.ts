import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from '../models/account.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserAccountService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:3000/Accounts/";

  getAccounts(id: number) {
    return this.http.get<Account[]>(`${this.url}` + '?uId=' + `${id}`);
  }

  deleteAccount(account: Account) {
    return this.http.delete(`${this.url}/${account.id}`)
  }

  addAccount(account: Account) {
    return this.http.post(`${this.url}`, account)
  }



}
