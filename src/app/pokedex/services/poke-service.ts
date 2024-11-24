import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PokeDetails, Pokemon, PokeResult} from '../../shared/models/poke-model';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  constructor(
    private _http: HttpClient,
  ) { }

  getPokeList(url: string): Observable<PokeResult> {
    return this._http.get<PokeResult>(url);
  }

  getDetails(url : string): Observable<PokeDetails>{
    return this._http.get<PokeDetails>(url);
  }
}
