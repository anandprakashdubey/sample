import { Injectable } from '@angular/core';
import { Registration } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserRegistrationService {
  public userRegistrationProp: Registration = new Registration();

  private BaseUrl: string = 'https://localhost:7146/api/UserRegistration';

  constructor(private http: HttpClient) {}

  setUser(_user: Registration) {
    this.userRegistrationProp = _user;
  }

  getUser() {
    return this.userRegistrationProp;
  }

  /*HTTP SERVICE METHODS*/

  createUser(user: any) {
    const endpointURL = `https://localhost:7146/api/UserRegistration/register`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(endpointURL, user, { headers });
  }
}
