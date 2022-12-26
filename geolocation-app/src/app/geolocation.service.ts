import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MyGeolocation } from './mygeolocation';

@Injectable({
  providedIn: 'root',
})
export class GeolocationService {
  private baseURL = 'https://ipapi.co/8.8.8.8';

  constructor(private httpClient: HttpClient) {}

  getGeolocationById(): Observable<MyGeolocation> {
    return this.httpClient.get<MyGeolocation>(`${this.baseURL}/json`);
  }
}
