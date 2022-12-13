import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { pokemon } from 'src/app/models/pokemon/pokemon.model';
import { AudioService } from 'src/app/other/Services/audio.service';

@Component({
  selector: 'app-pokedex-item',
  templateUrl: './pokedex-item.component.html',
  styleUrls: ['./pokedex-item.component.css']
})
export class PokedexItemComponent implements OnInit {

  @Input() pokemonItem : pokemon

  constructor(
    private _router : Router,
    private _audio : AudioService
    ) { }

  ngOnInit(): void {
  }

  goto(id){
    this.playBtn()
    this._router.navigate(['pokedex-detail', id-1])
  }

  playBtn(){
    this._audio.playaudioButton()
  }
}
