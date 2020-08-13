import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_LOGIN = 'https://immense-citadel-91115.herokuapp.com/api/Users/login';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }
  login(credantials): Observable<any> {
    return this.http.post(API_LOGIN, credantials);
  }
  logout() {
    localStorage.removeItem('token');
  }
  isAutheticated() {
    return !!localStorage.getItem('token');
  }
}
