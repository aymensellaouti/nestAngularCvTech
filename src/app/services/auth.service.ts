import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {ValidationErrors} from '@angular/forms';

// const API_LOGIN = 'https://immense-citadel-91115.herokuapp.com/api/Users/login';
const API_LOGIN = 'http://localhost:3000/user/login';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }
  login(credentials): Observable<any> {
    return this.http.post(API_LOGIN, credentials);
  }
  logout() {
    localStorage.removeItem('token');
  }
  isAutheticated() {
    return !!localStorage.getItem('token');
  }

 findUserByEmail(value: any): Observable<ValidationErrors | null> {
      return new Observable<ValidationErrors | null>(
        (observer) => {
          setTimeout(
            () => {
              const date = new Date();
              if (date.getTime() % 2) {
                observer.next(null);
              } else {
              observer.next({userExists: true});
              }
            },
            1500
          );
        }
      );
  }
}
