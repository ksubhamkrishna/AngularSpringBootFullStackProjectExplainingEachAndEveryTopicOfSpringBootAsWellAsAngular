import { HttpClient } from '@angular/common/http';
import { AfterViewInit, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IUserList, User } from '../../../model/user';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-post-api',
  imports: [FormsModule],
  templateUrl: './post-api.html',
  styleUrl: './post-api.css',
})
export class PostApi implements OnInit, AfterViewInit {

  http = inject(HttpClient);

  userObj: User = new User();

  userList: IUserList[] = [];

  private cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.getAllUsers();
  }

  ngAfterViewInit(): void {
    console.log("after view init", performance.now());
  }

  getAllUsers() {
    this.http.get("http://localhost:8080/api/users").subscribe({
      next: (res: any) => {
        this.userList = res;
        this.cdr.markForCheck();
        console.log("userList =", this.userList);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  onPostSubmit() {
    this.http.post("http://localhost:8080/api/users", this.userObj).subscribe((res: any) => {

      if (res.name != null && res.email != null) {
        this.userObj = new User();
        alert("User Saved Successfully.");
        this.getAllUsers();

      } else {
        alert("UserName or Email is Null");
      }
    })
  }

  onPutCall() {

    if (
      this.userObj.name == null ||
      this.userObj.name.trim() === "" ||
      this.userObj.email == null ||
      this.userObj.email.trim() === ""
    ) {
      alert("Username or email is empty");
      return;
    }

    this.http.put(
      `http://localhost:8080/api/users/${this.userObj.id}`,
      this.userObj
    ).subscribe((res: any) => {
      alert("User Updated Successfully");
      this.getAllUsers();
    });
  }
  onEdit(item: any) {
    this.userObj = item;
  }

  onDeletecall(id: any) {
    const isDelete = confirm("Are U sure You want to delete this user record!")
    if (isDelete == true) {
      this.http.delete(`http://localhost:8080/api/users/${id}`, { responseType: 'text' }).subscribe((res: any) => {
        if (res === `User id deleted with id :${id}`) {
          alert("User Deleted Successfully");
          this.getAllUsers();

        }
        else {
          alert("There is some error in deleting the user, Please try again later");
        }

      })
    }
  }

}