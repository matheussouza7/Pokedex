import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PokedexService } from 'src/app/services/pokedex.service';
import { ShareService } from 'src/app/services/share.service';
import { Especies, Pokemon, Stats, Types } from 'src/app/shared/models/pokemon';
import { PokemonsParameters } from 'src/app/shared/models/PokemonsParameter';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  public pokemons: Pokemon[] = [];
  public types: string[] = [];
  page = 1;
  pageSize = 10;
  items = 10;
  collectionSize = this.pokemons.length;

  public params: PokemonsParameters = {
    limit: this.pageSize,
    offset: this.page * this.pageSize - this.pageSize,
  };

  constructor(private pokedexService: PokedexService) {}
  ngOnInit(): void {
    this.changePage();
    this.getTypes();
  }

  changePage() {
    this.getData();
    this.getDetails();
  }

  getData() {
    this.pokedexService.getAll(this.params).subscribe(
      (response) => {
        this.pokemons = response.results;
        this.getDetails();
      },
      (error) => {}
    );
  }

  getDetails() {
    this.pokemons.forEach((x, i: number) => {
      this.pokedexService.getInfo(x.name).subscribe(
        (response) => {
          let array: Stats[] = [];

          for (let i = 0; i < response.stats.length; i++) {
            const stats: Stats = {
              base_stat: response.stats[i].base_stat,
              stats: response.stats[i].stat.name,
            };

            array.push(stats);
            x.stats = array;
          }
        },
        (error) => {}
      );
    });
  }

  listPokemons() {
    this.params.limit = this.pageSize;
    this.params.offset = this.page * this.pageSize - this.pageSize;
    this.changePage();
    //console.log(this.params);
  }
  getTypes() {
    this.pokedexService.getAllTypes().subscribe((response) => {
      const results: Types[] = response.results;
      results.forEach((x) => {
        this.types.push(x.name!);
      });
    });
    console.log(this.types);
  }

  setType(type: string) {
    this.pokedexService.getType(type).subscribe((response) => {
      console.log(response.pokemon);
    });
  }
}
