import { Component, OnInit } from '@angular/core';
import {UserService } from '../../services/user';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-get-users',
  imports: [FormsModule],
  templateUrl: './get-users.html',
  styleUrl: './get-users.css',
})
export class GetUsers implements OnInit {

  userObj: any = {
    name: "",
    email: ""
  }

  userArray: any[] = [];

  constructor(private userService: UserService) { } // Our service class ts is injected through constructor
  ngOnInit(): void {
    this.getUsersFromService();
  }

  getUsers() {
    this.getUsersFromService;
  }
  getUsersFromService() {
    this.userService.loadUsers().subscribe((res: any) => {
      this.userArray = res;
    })
  }
  onSave() {
    this.userService.createNewUser(this.userObj).subscribe((res: any) => {
      if (res.name != null && res.email != null) {
        alert("User Created Successfuly");
        this.getUsersFromService();
      }
      else {
        alert("Name or Email is missing");
      }
    })
  }


}
