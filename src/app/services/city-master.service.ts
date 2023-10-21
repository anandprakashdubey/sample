import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CityMasterService {
  private BaseUrl: string = 'https://localhost:7146/api/CityMaster';

  constructor(private http: HttpClient) {}

  getCities() {
    return this.http.get(`${this.BaseUrl}/cities`);
  }
}
