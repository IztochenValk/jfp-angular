// src/app/services/pokemon.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export interface PokemonCard {
  id: number;
  name: string;
  image: string;
}

@Injectable({ providedIn: 'root' })
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemons() {
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon?limit=151');
  }
}
