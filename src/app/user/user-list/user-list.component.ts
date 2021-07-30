import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user.model';
import { UserService } from '../service/user.service';
import { UserAccountService } from '../service/users-account.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userFormHeader: string[] = ['name', 'lastName', 'gender', 'pid', 'mobNum', 'address', 'action'];
  userData: User[] = [];
  firstName: string;

  p: number = 1;

  key: string = "id";
  reverse: boolean = false;




  constructor(private http: UserService,) { }

  ngOnInit(): void {
    this.fillUser();
  }



  search() {
    if (this.firstName == "") {
      this.ngOnInit();
    } else {
      this.userData = this.userData.filter(res => {
        return res.firstName.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
      });
    }
  }


  sort(key) {
    this.key = key;
    this.reverse = !this.reverse
  }

  fillUser() {
    this.http.getUsers().subscribe((res: User[]) => {
      this.userData = res;
    });
  }


  deleteUser(id: User) {
    this.http.deleteUser(id).subscribe(() => {
      this.fillUser();
    })
  }


}
