import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Tool } from './tool';
import { User } from './user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  /* backendUrl = 'http://localhost:4000'; */
  backendUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // get all entries
  getAllTools(): Observable<Tool[]> {
    let endpoint = '/tools';
    return this.http.get<Tool[]>(this.backendUrl + endpoint);
  }

  // post one entry
  postOneTool(tool: Tool): Observable<Tool> {
    let endpoint = '/tools';
    return this.http.post<Tool>(this.backendUrl + endpoint, tool);
  }

  // get one entry via id
  getOneToolId(id: string): Observable<Tool>{
    let endpoint = '/tools';
    return this.http.get<Tool>(this.backendUrl + endpoint + '/' + id);
  }

  // get one entry via artikel
  getOneArtikel(artikel: string): Observable<Tool>{
    let endpoint = '/tools';
    return this.http.get<Tool>(this.backendUrl + endpoint + '/artikel/' + artikel);
  }

  // delete one entry
  deleteOneTool(id:string): Observable<any> {
    let endpoint = '/tools';
    return this.http.delete<any>(this.backendUrl + endpoint + '/' + id);
  }

  // update entry
  updateOneTool(tool: Tool, id: string): Observable<Tool> {
    let endpoint = '/tools';
    return this.http.put<Tool>(this.backendUrl + endpoint + '/' + id, tool);
  }

  // create one user
  registerUser(user: User): Observable<User> {
    let endpoint = '/users';
    return this.http.post<User>(this.backendUrl + endpoint, user);
  }

  // get all users
  getAllUsers(): Observable<User[]> {
    let endpoint = '/users';
    return this.http.get<User[]>(this.backendUrl + endpoint);
  }
}
