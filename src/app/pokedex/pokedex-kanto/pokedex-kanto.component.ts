import { Component } from '@angular/core';
import {PokeService} from '../services/poke-service';
import {PokeDetails, Pokemon, PokeResult, Sprite} from '../../shared/models/poke-model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-pokedex-kanto',
  templateUrl: './pokedex-kanto.component.html',
  styleUrl: './pokedex-kanto.component.scss'
})
export class PokedexKantoComponent {

  pokeResult!: PokeResult;
  pokemonsList!: Pokemon[];
  pokeDetails!: PokeDetails | null;
  details!:PokeDetails;

  constructor(
    private readonly _pokeService: PokeService
  ) {
    this.getPokeResult('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
  }

  getPokeResult(url: string): void {
    this._pokeService.getPokeResult(url).subscribe((result) => {
      this.pokeResult = result;
      this.pokemonsList = result.results;
      this.pokemonsList.forEach((pokemon) => {
        this._pokeService.getDetails(pokemon.url).subscribe((details) => {
          pokemon.pokeDetails = details;
        })
      })
      console.log(this.pokemonsList)
    })
  }

  displayDetails(details: PokeDetails): void {
    this.pokeDetails = details;
  }

  cloeDetails(): void {
    this.pokeDetails = null;
  }

  getNext(): void {
    if (this.pokeResult.next) {
      this.getPokeResult(this.pokeResult.next);
    }
  }

  getPrevious(): void {
    if (this.pokeResult.previous) {
      this.getPokeResult(this.pokeResult.previous);
    }
  }
}

/*
  pokeResult!: PokeResult;
  resultList!:Pokemon[];
  pokeListDetails!: PokeDetails[];

  constructor(
    private readonly _pokeService: PokeService
  ) {
    this.getPokeResult('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
  }

  getPokeResult(url: string): void {
    this._pokeService.getPokeResult(url).subscribe((result) => {
      this.pokeResult = result;
      this.resultList = this.pokeResult.results;
    })
  }

  fillPokeList(): void {
    this.resultList.forEach((pokemonDetails) => {
      this.pokeListDetails.push(pokemonDetails.pokeDetails);
    })
  }

 */
