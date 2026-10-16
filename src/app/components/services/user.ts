import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';

@Service()
export class UserService {

apiUrl:string = "http://localhost:8080/api/users";

    http=inject(HttpClient);

    loadUsers() {
        return this.http.get(this.apiUrl);
    }

    createNewUser(obj:any){

    return this.http.post(this.apiUrl,obj) ;
    }
}
