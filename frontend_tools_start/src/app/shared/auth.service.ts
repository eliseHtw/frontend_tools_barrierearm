import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  backendUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.backendUrl + '/users');
  }

  registerUser(user:User): Observable<any> {
    return this.http.post(this.backendUrl + '/users', user);
  }
}
