import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable()
export class UsersService {
    path: string = 'http://jsonplaceholder.typicode.com/users';

    constructor(private http: HttpClient) { }

    getAllUsers() {
        return this.http.get<User[]>(`${this.path}`);
    }

    getUser(id: number): Observable<any> {
        return this.http.get<User>(`${this.path}/${id}`);
    }

    createUser(newUser: User) {
        let data = JSON.stringify(newUser);

        return this.http.post(`${this.path}`, data);
    }

    // updateUser(user: User) {
    //     let id = user.id;
    //     let data = JSON.stringify(user);

    //     return this.http.put(`${this.path}/${id}`, data);
    // }

    deleteUser(id: number) {
        return this.http.delete(`${this.path}/${id}`);
    }

    // makeOptions() {
    //     let headers = new Headers();
    //     headers.append('API-TOKEN', 'xxxx7777ywewe');

    //     return {
    //         headers: headers
    //     }
    // }

}