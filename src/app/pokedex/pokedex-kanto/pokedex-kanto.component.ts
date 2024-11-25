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
  pokeDetails!: PokeDetails;
  pokePic!:Sprite;

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
          this._pokeService.getImg(this.pokeDetails.sprites.front_default).subscribe((pic) => {
            pokemon.pokeDetails.sprites = pic;
          })
        })
      })
    })
  }

  getImage(url: string): void {
    this._pokeService.getImg(url).subscribe((img) => {
      this.pokeDetails.sprites = img;
    })
  }

  getDetails(url: string): void {
    this._pokeService.getDetails(url).subscribe((details) => {
      this.pokeDetails = details;
    })
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
