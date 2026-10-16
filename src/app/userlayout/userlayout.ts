import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-userlayout',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './userlayout.html',
  styleUrl: './userlayout.css',
})
export class Userlayout {

  router = inject(Router);

  onLogoff() {
    localStorage.removeItem("token");
    this.router.navigateByUrl("login");

  }

}
