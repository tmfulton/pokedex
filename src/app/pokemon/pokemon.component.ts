import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../pokemon';
import * as jsonPokemonList from '../../assets/Pokemon.json';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  pokeList: Pokemon[] = (jsonPokemonList as any).default;



  constructor() { }

  getPicture(id: number){
    let pictureID : string = id.toString() + '.png';
    return '../../assets/images/' + pictureID;
  }


  ngOnInit() {

  }

}
