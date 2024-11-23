import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pokemon, PokeResult} from '../../shared/models/poke-model';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  constructor(
    private _http: HttpClient,
  ) { }

  getPokemons(url: string): Observable<PokeResult> {
    return this._http.get<PokeResult>(url);
  }


}