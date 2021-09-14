import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = "https://restcountries.eu/rest/v2/";

  constructor(private http: HttpClient) { }

  // Se retorna un Observable (preferente que el tipo de datos esté definido en una interfaz para devolver su tipo, y no un "any"
  buscarPais(termino: string): Observable<any> {
    const url = `${this.apiUrl}name/${termino}`
    return this.http.get(url)
      .pipe(
        catchError(err => [
          of([]) // atrapa el error y retorna un arreglo vacío
        ])
      );
  }
}
