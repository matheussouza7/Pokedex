import { PokemonFormComponent } from './components/pokemon-form/pokemon-form.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import {
  NgbPaginationModule,
  NgbAlertModule,
} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [PokemonListComponent, PokemonFormComponent],
  imports: [
    FormsModule,
    NgbPaginationModule,
    NgbAlertModule,
    CommonModule,
    RouterModule.forChild([{ path: '', component: PokemonListComponent }]),
  ],
  providers: [],
  exports: [PokemonListComponent, PokemonFormComponent],
})
export class PokemonModule {}
