import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) { }

  getCharacters(): Observable<any> {
    return this.http.get('https://swapi.co/api/people/');
  }
}
