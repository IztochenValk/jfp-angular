// src/app/pages/api-pokemon/api-pokemon.component.ts
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../../services/pokemon.service';

type Pokemon = {
  id: number;
  name: string;
  image: string;
};

@Component({
  selector: 'app-api-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api-pokemon.html',
  styleUrls: ['./api-pokemon.css'],
})
export class ApiPokemon {

  pokemons: Pokemon[] = [];
  pokemonService = inject(PokemonService);

  constructor() {
    this.pokemonService.getPokemons().subscribe((data: any) => {
      this.pokemons = data.results.map((pokemon: any, index: number) => ({
        id: index + 1,
        name: pokemon.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`,
      }));
    });
  }
}
