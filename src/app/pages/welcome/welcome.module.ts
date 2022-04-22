import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { TesteComponent } from './components/teste/teste.component';

@NgModule({
  declarations: [WelcomeComponent, TesteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: WelcomeComponent },
      { path: 'teste', component: TesteComponent },
    ]),
  ],
  exports: [WelcomeComponent],
})
export class WelcomeModule {}
