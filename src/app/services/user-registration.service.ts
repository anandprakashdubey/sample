import { Injectable } from '@angular/core';
import { Registration } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserRegistrationService {
  private BaseUrl: string = 'http://localhost:5183/api/UserRegistration';

  constructor(public http: HttpClient) {}

  /*HTTP SERVICE METHODS*/

  createUser(user: Registration): Observable<Registration> {
    return this.http.post<Registration>(`${this.BaseUrl}/createUser`, user);
  }

  updateUser(user: Registration): Observable<Registration> {
    return this.http.post<Registration>(`${this.BaseUrl}/updateUser`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.post<any>(`${this.BaseUrl}/deleteUser/${id}`, id);
  }

  getUserById(id: number): Observable<Registration> {
    return this.http.get<Registration>(`${this.BaseUrl}/getUser/${id}`);
  }

  getUsers(): Observable<Registration[]> {
    return this.http.get<Registration[]>(`${this.BaseUrl}/getUsers`);
  }
}
