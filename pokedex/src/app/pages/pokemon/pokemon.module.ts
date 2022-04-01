import { PokemonFormComponent } from './components/pokemon-form/pokemon-form.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';

@NgModule({
  declarations: [PokemonListComponent, PokemonFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: PokemonListComponent }]),
  ],
  exports: [PokemonListComponent, PokemonFormComponent],
})
export class PokemonModule {}
