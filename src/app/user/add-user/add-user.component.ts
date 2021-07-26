import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
    gender: new FormControl('კაცი'),
    pid: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{11}$")]),
    mobNum: new FormControl('', [Validators.required, Validators.pattern("^[0-8]{9}$")]),
    legalAddress: new FormControl('', Validators.required),
    actualAddress: new FormControl('', Validators.required),
  });

  constructor( private userService: UserService) { }

  ngOnInit(): void {
  }

  addUser(){
    this.userService.addUser(this.userForm.value).subscribe((res)=>{
      console.log(res)
    })
  }

}
