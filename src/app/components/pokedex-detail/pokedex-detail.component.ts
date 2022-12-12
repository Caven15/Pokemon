import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pokemon } from 'src/app/models/pokemon/pokemon.model';
import { ApiService } from 'src/app/other/Services/api.service';

@Component({
  selector: 'app-pokedex-detail',
  templateUrl: './pokedex-detail.component.html',
  styleUrls: ['./pokedex-detail.component.css']
})
export class PokedexDetailComponent implements OnInit {


  constructor(
    private _activatedRoute : ActivatedRoute,
    private _pokeApi : ApiService
    ) { }

  id = this._activatedRoute.snapshot.params['id']
  pokemon : pokemon = this._pokeApi.getOne(this.id)
  stat : any = this._pokeApi.getMaxValueByStats()

  ngOnInit(): void {
    console.log(this.stat)
  }

}