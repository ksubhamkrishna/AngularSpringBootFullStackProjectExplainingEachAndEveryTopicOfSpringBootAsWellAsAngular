import { Component, resource } from '@angular/core';

@Component({
  selector: 'app-resource-api',
  imports: [],
  templateUrl: './resource-api.html',
  styleUrl: './resource-api.css',
})
export class ResourceApi {

  userList = resource({

    loader: () => {
      return fetch('http://localhost:8080/api/users')
        .then((res) => res.json() as Promise<any[]>)
    }

  })

  reloadData() {
    this.userList.reload();
  }

}
