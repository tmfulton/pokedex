import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../pokemon';
import * as jsonPokemonList from '../../assets/Pokemon.json';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';
import { PokedexService } from '../service/pokedex.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  pokemon: Pokemon;
  picture: string;
  caught: boolean;
  id: number;

  constructor(private route: ActivatedRoute, private location: Location, private router: Router, private pokedex: PokedexService ) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.pokemon = this.pokedex.getPokemon(this.id);
    this.picture = this.pokedex.getPicture(this.id);
    this.caught = this.pokemon.caught??false;
  }

  returnToPokedex() {
    this.location.back();
    this.router.navigate(['/']);
  }

  catch() {
    this.caught = true;
    this.pokedex.catchPokemon(this.id);
  }

}
