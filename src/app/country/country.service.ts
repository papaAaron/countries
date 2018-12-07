import { Country } from './Country';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrlgetAll = 'https://restcountries.eu/rest/v2/all';

  private apiUrlgetByName = 'https://restcountries.eu/rest/v2/name';


  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Country[]> {
    return this.http.get<Country[]>(this.apiUrlgetAll);
  }

  findByName(name: String): Observable<Country> {
    return this.http.get<Country>(this.apiUrlgetByName);
  }

}
