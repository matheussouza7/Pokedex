import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/services/pokedex.service';
import { Pokemon } from 'src/app/shared/models/pokemon';
import { PokemonsParameters } from 'src/app/shared/models/PokemonsParameter';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  public Pokemons: Pokemon[] = [];
  public Params: PokemonsParameters = {
    limit: 200,
    offset: 0,
  };
  constructor(private pokedexService: PokedexService) {}

  ngOnInit(): void {
    this.pokedexService.getAll(this.Params).subscribe(
      (response) => {
        this.Pokemons = response.results;
        console.log(this.Pokemons);
      },
      (error) => {}
    );
  }
}
