import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  loginUser(data: any): Observable<any> {
    return this.httpClient.post(`${environment.url}api/auth/login`, data);
  }
}
