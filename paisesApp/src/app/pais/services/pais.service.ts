import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = "https://restcountries.eu/rest/v2/";

  get getParams(): HttpParams {
    return new HttpParams().set('fields', 'name;capital;alpha2Code;flag;population')
  }

  constructor(private http: HttpClient) { }

  // Se retorna un Observable (preferente que el tipo de datos esté definido en una interfaz para devolver su tipo, y no un "any"
  buscarPais(termino: string): Observable<Country[]> {
    // debugger
    const url = `${this.apiUrl}name/${termino}`
    return this.http.get<Country[]>(url)
    // .pipe((
    //   tap(console.log)
    // ))
  }

  // Se retorna un Observable (preferente que el tipo de datos esté definido en una interfaz para devolver su tipo, y no un "any"
  buscarCapital(termino: string): Observable<Country[]> {
    // debugger
    const url = `${this.apiUrl}capital/${termino}`
    return this.http.get<Country[]>(url, { params: this.getParams })
    // .pipe((
    //   tap(console.log)
    // ))
  }

  getPaisPorAlphaCode(id: string): Observable<Country[]> {
    // debugger
    const url = `${this.apiUrl}alpha/${id}`
    return this.http.get<Country[]>(url)
    // .pipe((
    //   tap(console.log)
    // ))
  }

  getPaisesPorRegion(region: string): Observable<Country[]> {
    // debugger
    const url = `${this.apiUrl}region/${region}`
    return this.http.get<Country[]>(url, { params: this.getParams })
    .pipe((
      tap(console.log)
    ))
  }
}
