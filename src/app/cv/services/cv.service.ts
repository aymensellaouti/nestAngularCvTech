import { Injectable } from '@angular/core';
import {Personne} from '../Model/personne';
import {Observable, Subject} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

const API_LINK = 'https://immense-citadel-91115.herokuapp.com/api/personnes/';
@Injectable({
  providedIn: 'root'
})
export class CvService {
  personnes: Personne[];
  selectItemSubject = new Subject<Personne>();
  constructor(
    private http: HttpClient
  ) {
  }
  getFakePersonnes() {
    return this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 37, 123456, 'teacher', 'as.jpg'),
      new Personne(2, 'sellaouti', 'aymen', 37, 123456, 'teacher', ''),
      new Personne(3, 'sellaouti', 'aymen', 37, 123456, 'teacher', '            ')
    ];
  }
  getPersonnes(): Observable<Personne[]> {
    return this.http.get<Personne[]>(API_LINK);
  }
  getFakePersonneById(id) {
    // 1 == '1'
    return this.personnes.find(
      (personne) => personne.id === +id
    );
  }
  getPersonneById(id): Observable<Personne> {
    return this.http.get<Personne>(API_LINK + id);
  }
  selectItem(personne: Personne) {
    this.selectItemSubject.next(personne);
  }
  deletePersonne(id): Observable<any> {
    return this.http.delete(API_LINK + id);
  }
  addPersonne(personne: Personne) {
    return this.http.post(API_LINK, personne);
  }
}
