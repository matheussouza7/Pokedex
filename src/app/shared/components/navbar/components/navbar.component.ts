import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PokedexService } from 'src/app/services/pokedex.service';
import { ShareService } from 'src/app/services/share.service';
import { Types } from 'src/app/shared/models/pokemon';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private pokedexService: PokedexService, public router: Router) {}

  ngOnInit(): void {}
}
