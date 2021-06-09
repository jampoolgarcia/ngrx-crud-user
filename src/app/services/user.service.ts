import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private _http: HttpClient){

    }

    getRecords(): Observable<User[]>{
        return this._http.get<User[]>(`api/users`);
    }
}