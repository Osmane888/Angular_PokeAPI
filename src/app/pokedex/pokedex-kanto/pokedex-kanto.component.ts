import { Component } from '@angular/core';
import {PokeService} from '../services/poke-service';
import {PokeResult} from '../../shared/models/poke-model';

@Component({
  selector: 'app-pokedex-kanto',
  templateUrl: './pokedex-kanto.component.html',
  styleUrl: './pokedex-kanto.component.scss'
})
export class PokedexKantoComponent {

  pokeResult!: PokeResult;

  //'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'

  constructor(
    private readonly _pokeService: PokeService
  ) {

    this.getPokemons('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
  }

  getPokemons(url: string): void{
    this._pokeService.getPokemons(url).subscribe((results) => {
      this.pokeResult = results;
    })
  }

  getNext(): void{
    if(this.pokeResult.next){
    this.getPokemons(this.pokeResult.next);
    }
  }
}
