import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../pokemon';
import * as jsonPokemonList from '../../assets/Pokemon.json';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  pokemonList: Pokemon[] = (jsonPokemonList as any).default;
  pokemon: Pokemon;
  picture: string;
  caught: boolean;

  constructor(private route: ActivatedRoute, private location: Location ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.pokemon = this.pokemonList.find(x => x.id.toString() === id);
    this.picture = '../../assets/images/' + id + '.png';
    this.caught = false;
  }

  returnToPokedex() {
    this.location.back();
  }

  catch() {
    this.caught = true;
  }

}
