import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeolocationInfo } from '../model/geolocation-info';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class GeolocationService {
  constructor(private http: HttpClient) {}

  public getInfo(ip: string): Observable<GeolocationInfo> {
    const url = 'https://ipapi.co/' + ip + '/json/';
    console.log(url);
    return this.http.get<GeolocationInfo>(url);
  }
}
