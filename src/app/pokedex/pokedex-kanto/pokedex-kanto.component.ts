import { Component } from '@angular/core';
import {PokeService} from '../services/poke-service';
import {PokeDetails, Pokemon, PokeResult} from '../../shared/models/poke-model';

@Component({
  selector: 'app-pokedex-kanto',
  templateUrl: './pokedex-kanto.component.html',
  styleUrl: './pokedex-kanto.component.scss'
})
export class PokedexKantoComponent {

  pokeResult!: PokeResult;
  pokeDetails!: PokeDetails[];

  constructor(
    private readonly _pokeService: PokeService
  ) {
    this.getPokeList('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
  }

  getPokeList(url: string): void{
    this._pokeService.getPokeList(url).subscribe((results) => {
      this.pokeResult = results;
    })
  }

  getDetails(url: string): void {
    this.pokeResult.results.forEach((pokemon) => {
      this._pokeService.getDetails(pokemon.url).subscribe((result) => {
        this.pokeDetails.push(result);
      })
    })
  }

  getNext(): void{
    if(this.pokeResult.next){
    this.getPokeList(this.pokeResult.next);
    }
  }

  getPrevious(): void{
    if(this.pokeResult.previous){
      this.getPokeList(this.pokeResult.previous);
    }
  }
}
