import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [FormsModule, CommonModule],
  providers: [],
  exports: [NavbarComponent],
})
export class NavbarModule {}
