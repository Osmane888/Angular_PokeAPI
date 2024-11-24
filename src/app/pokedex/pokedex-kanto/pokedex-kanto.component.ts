import { Component } from '@angular/core';
import {PokeService} from '../services/poke-service';
import {PokeDetails, Pokemon, PokeResult} from '../../shared/models/poke-model';
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

  constructor(
    private readonly _pokeService: PokeService
  ) {
    this.getPokeResult('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
  }

  getPokeResult(url: string): void {
    this._pokeService.getPokeResult(url).subscribe((result) => {
      this.pokeResult = result;
      this.fillPokeList();
    })
  }

  fillPokeList(): void{
    this.pokemonsList = this.pokeResult.results;
  }

  getDetails(url: string): void{
   this._pokeService.getDetails(url).subscribe((details) => {
     this.pokeDetails = details;
   })
  }

  getNext(): void{
    if(this.pokeResult.next){
    this.getPokeResult(this.pokeResult.next);
    }
  }

  getPrevious(): void{
    if(this.pokeResult.previous){
      this.getPokeResult(this.pokeResult.previous);
    }
  }
}
