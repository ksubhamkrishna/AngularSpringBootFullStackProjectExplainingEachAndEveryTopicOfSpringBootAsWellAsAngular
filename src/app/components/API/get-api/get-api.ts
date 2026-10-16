import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.html',
  styleUrl: './get-api.css',
})
export class GetApi implements OnInit{

  userList: any[] = [];

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {

    this.http.get("http://127.0.0.1:8080/api/users").subscribe((result: any)=> {
      this.userList = result;
    })
  }

}
