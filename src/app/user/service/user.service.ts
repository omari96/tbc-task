import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:3000/Users/";

  getUsers() {
    return this.http.get<User[]>(this.url);
  }

  addUser(user: User) {
    return this.http.post(`${this.url}`, user)
  }

  deleteUser(user: User) {
    return this.http.delete(`${this.url}${user.uId}`)
  }

}
