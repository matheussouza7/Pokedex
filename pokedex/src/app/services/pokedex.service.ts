import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { PokemonsParameters } from '../shared/models/PokemonsParameter';

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  private apiURL = environment.apiURL;

  constructor(private http: HttpClient) {}

  getAll(params: PokemonsParameters): Observable<any> {
    const parameters = new URLSearchParams({ ...params } as {
      [key: string]: string;
    }).toString();
    return this.http.get<any>(`${this.apiURL}/pokemon?${parameters}`);
  }
  getPokemon(name: string): Observable<any> {
    return this.http.get<any>(`/${this.apiURL}/${name}`);
  }
}
