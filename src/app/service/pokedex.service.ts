import { Injectable } from '@angular/core';
import { Pokemon } from '../pokemon';
import * as jsonPokemonList from '../../assets/Pokemon.json';
import { PokemonComponent } from '../pokemon/pokemon.component';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  pokeList: Pokemon[] = (jsonPokemonList as any).default;

  constructor() { }

  public getPicture(id: number): string{
    return '/assets/images/' + id.toString() + '.png';
  }

  public getPokemon(id: number): Pokemon{
    return this.pokeList.find(x => x.id === id);
  }

  public catchPokemon(id: number): void {
    this.getPokemon(id).caught = true;
  }
}
