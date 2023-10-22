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
    return this.http.post<Registration>(`${this.BaseUrl}/userRegister`, user);
  }
}
