import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CityList } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class CityMasterService {
  private BaseUrl: string = 'https://localhost:7146/api/CityMaster';

  constructor(private http: HttpClient) {}

  getCities(): Observable<CityList[]> {
    return this.http.get<CityList[]>(`${this.BaseUrl}/cities`);
  }
}
