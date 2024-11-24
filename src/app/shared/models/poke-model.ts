export interface PokeResult{
    count: number;
    previous?: string;
    next?: string;
    results: Pokemon[];
}

export interface Pokemon{
    name: string;
    url: string;
}

export interface PokeDetails{
 id:number;
 abilities: Ability[];
 height: number;
 weight: number;
 sprites: {
   front_default: string;
   other: {
     dream_world: {
       front_default: string;
     }
   }
 }
 species:{
     name:string;
 }
 type:[
     type:{
     name:string;
     }
 ]
}

export interface Ability{
     ability: {
         name: string;
     }
}
