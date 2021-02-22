import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../service/pokedex.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {


  constructor(public pokedex:PokedexService) { }

  getPicture(id: number){
    return this.pokedex.getPicture(id);
  }

  getCaught(id: number){
    return this.pokedex.getPokemon(id).caught??false;
  }

  ngOnInit() {

  }

}
