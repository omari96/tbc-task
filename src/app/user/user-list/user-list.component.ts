import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userFormHeader: string[] = ['name', 'lastName', 'gender', 'pid', 'mobNum', 'address', 'action'];
  userData: User[] = [];

  constructor(private http: UserService) { }

  ngOnInit(): void {
    this.fillUser();
  }

  fillUser() {
    this.http.getUsers().subscribe((res: User[]) => {
      this.userData = res;
      console.log(this.userData)
    })
  }

  deleteUser(id: User){
    this.http.deleteUser(id).subscribe(()=>{
      this.fillUser();
    })
  }


}
