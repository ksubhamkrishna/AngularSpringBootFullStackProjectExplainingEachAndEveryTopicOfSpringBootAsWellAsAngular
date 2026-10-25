import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-get-api',
  imports: [FormsModule],
  templateUrl: './get-api.html',
  styleUrl: './get-api.css',
})
export class GetApi implements OnInit {

  // userList=signal< any[]>([]);

  userList: any[] = [];

  private cdr = inject(ChangeDetectorRef);

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {

    this.http.get("http://127.0.0.1:8080/api/users").subscribe((result: any) => {
      this.userList = result;
      this.cdr.markForCheck();
    })
  }

}
