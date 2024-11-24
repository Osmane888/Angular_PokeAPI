export interface PokeResult{
    count: number;
    previous?: string;
    next?: string;
    results: Pokemon[];
}

export interface Pokemon{
    name: string;
    url: string;
    pokeDetails: PokeDetails;
}

export interface PokeDetails{
 id:number;
  species:{
    name:string;
  }
 abilities: Ability[];
 height: number;
 weight: number;
 type:[
     type:{
     name:string;
     }
 ]
  sprites: Sprite;
}

export interface Ability{
     ability: {
         name: string;
     }
}

export interface Sprite{
  front_default: string;
}
