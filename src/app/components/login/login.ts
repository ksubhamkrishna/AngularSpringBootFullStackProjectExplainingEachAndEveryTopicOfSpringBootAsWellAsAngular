
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface UserTypeResponse {
  id: number;
  email: string;
  role: string;
}

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  router = inject(Router);
  http = inject(HttpClient);

  loginObj = {
    email: '',
    password: '',
    
  };

  onLogin() {
    this.http.post("http://localhost:8090/auth/login", this.loginObj, { responseType: 'text' }).subscribe((res: string) => {
      
      console.log(res);
      localStorage.setItem('token', res);

      const headers = new HttpHeaders({
        Authorization: `Bearer ${Token}`
      });

      this.http.get<UserTypeResponse[]>('http://localhost:8090/auth/user-type', { headers }).subscribe((GetUsersFromToken: UserTypeResponse[]) => {
        if (!GetUsersFromToken || GetUsersFromToken.length === 0) {
          alert('No user information found.');
          return;
        }

        const userType = GetUsersFromToken[0].role?.trim().toUpperCase();

        if (userType === 'ADMIN') {
          this.router.navigateByUrl("after-login-admin");
        }
        else if (userType === 'USER') {
          this.router.navigateByUrl("after-login-user");
        }
        else {
          alert('Invalid email or Password');
        }
      })



    })
  }


}